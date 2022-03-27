import React from "react"
import Listing from "./Listing"
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import  { Navigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { GetTheme, GetPaddedStyle } from './theme.js'
import { ThemeProvider } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

function ListingItems(props) {

    async function getCategories() {
        await fetch('http://localhost:5000/category/getAll')
        .then(response => response.json())
        .then(data => setAllCategories(data))  
    }

    async function getListings() {

        if (props.isSale) {
            await fetch('http://localhost:5000/listing/getAllSell')
            .then(response => response.json())
            .then(data => setListings(data))  
        }
        else {
            await fetch('http://localhost:5000/listing/getAllBuy')
            .then(response => response.json())
            .then(data => setListings(data))  
        }

    }

    async function CheckLogin(){
        const token = localStorage.getItem('auth-key')
        if (token == null) {
            setAuthed(false)
        }

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', token)
    
        await fetch('http://localhost:5000/account/me', {
            method: 'GET',
            headers: headers,
          })
          .then(function(response) {
            if (response.status === 200) {
                setAuthed(true)
            }
            else {
                setAuthed(false) 
            }
        })
    }

    const style = GetPaddedStyle()
    const theme = GetTheme()


    const [listings, setListings] = React.useState([])
    const [dialogDisplay, setDialogDisplay] = React.useState('none')
    const [allCategories, setAllCategories] = React.useState([])
    const [authed, setAuthed] = React.useState(true)

    React.useEffect(() => {
        getCategories()
        getListings()
        CheckLogin()
      }, [])

    //Create dialog states
    const [category, setCategory] = React.useState('')
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('')

    const [searchTerm, setSearchTerm] = React.useState('')

    function filterListings() {
        console.log("Search")
    }


    const createListing = async (event) => {
        let newListing = {name: name, description: description, category: category, price: price, isSale: props.isSale}

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', localStorage.getItem('auth-key'))

        await fetch("http://localhost:5000/listing/add", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newListing),
            })
            .then(
            console.log("Listing added"),
            setName(''),
            setDescription(''),
            setPrice('')
            )
            .catch(error => {
            window.alert(error);
            return;
        })
        closeCreateDialog()
        getListings()
    }

    const updateSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const updateCategory = (event) => {
        setCategory(event.target.value)
    }

    const updateName = (event) => {
        setName(event.target.value)
    }

    const updateDescription = (event) => {
        setDescription(event.target.value)
    }

    const updatePrice = (event) => {
        setPrice(event.target.value)
    }

    const openCreateDialog = (event) => {
        setDialogDisplay('block')
    }

    const closeCreateDialog = (event) => {
        setDialogDisplay('none')
    }

    let paperStyle = Object.assign({}, style)
    paperStyle.maxWidth = 500
    paperStyle.marginTop = '5em'

    const createDialog = <Box sx={{height: '100vh', width: '100vw', backgroundColor: '#000000aa', position: 'fixed', bottom: '0', right: '0', display: dialogDisplay}}>
    <Paper elevation={3} sx={paperStyle}>
        <IconButton onClick={closeCreateDialog} sx={{float: 'right'}}>
        <CloseIcon />
        </IconButton>
        <Typography variant='h2'>Create a new listing</Typography>
        <Stack spacing={2} direction="column">
            <TextField id='crtName' label='Name' variant='outlined' onChange={updateName} value={name}/>
            <TextField id='crtDescription' label='Description' variant='outlined' multiline onChange={updateDescription} value={description}/>
            <Select id='crtCategory' value={category} onChange={updateCategory}>
                {allCategories.map((cat) => (
                <MenuItem key={cat.name} value={cat.name}>{cat.name}</MenuItem>
                ))}
            </Select>
            <TextField id='crtPrice' label='Price' variant='outlined' InputProps={{endAdornment: <InputAdornment position="end"> CZK</InputAdornment>}} onChange={updatePrice} value={price}/>
            <Button variant="contained" onClick={createListing}>Create listing!</Button>
        </Stack>
    </Paper>
    </Box>
    
    if (authed) {
        return <ThemeProvider theme={theme}><Box sx={style}>
        <Paper elevation={3} sx={{padding: '0.5em', marginBottom: '0.5em', overflow: 'auto', display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center'}}>
        <TextField id='searchTerm' label='What are you looking for?' variant='outlined' onChange={updateSearch} sx={{ float: 'left'}}/>
        <Box sx={{ width: { xs: '80%', md: '30%' }, float: 'left', marginLeft: { xs: '0', md: '2em' }, marginTop: { xs: '1em', md: '0' }}}>
            <Typography variant='body1'>Max price</Typography>
            <Slider defaultValue={0} min={0} max={getMaxPrice(listings)} valueLabelDisplay="auto" />
        </Box>
        <Button variant="contained" onClick={filterListings} sx={{ float: 'left', marginLeft: '2em'}}>Search</Button>
        </Paper>
        {listings.map((item) => (
            <Listing key={item._id} name={item.name} description={item.description} price={item.price} user={item.user} category={item.category} />
        ))}

        <Fab onClick={openCreateDialog} color="primary" sx={{ position: 'fixed', bottom: '10vh', right: '10vw' }}><EditIcon /></Fab>
        {createDialog}
        
        </Box></ThemeProvider>
    }   
    return <Navigate to='/login' />  
    
}

function getMaxPrice(listings) {
    let max = 0
    listings.forEach(item => {
        if (item.price > max) {
            max = item.price
        }
    })

    return max
}



export default ListingItems