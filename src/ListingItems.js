import React from "react"
import Listing from "./Listing"
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
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

    const style = GetPaddedStyle()
    const theme = GetTheme()

    const initialListings = [{name: 'Name1', desc: 'Lorem ipsum', price: 100, id: 1},{name: 'Name2', desc: 'Ipsum lorem dolor', price: 200, id: 2},{name: 'Name3', desc: 'Lorem ipsum etc etc 🍔', price: 150, id: 3}]

    const [listings, setListings] = React.useState(initialListings)
    const [dialogDisplay, setDialogDisplay] = React.useState('none')

    const handleSearchChange = (event) => {
      let newList = filterListings(initialListings, event.target.value)
      setListings(newList)
      console.log(newList)
    }

    const openCreateDialog = (event) => {
        setDialogDisplay('block')
    }

    const closeCreateDialog = (event) => {
        setDialogDisplay('none')
    }

    let btnCreate = <></>
    let createDialog = <></>

    if (!props.buy) {
        btnCreate = <Fab onClick={openCreateDialog} color="primary" sx={{ position: 'fixed', bottom: '10vh', right: '10vw' }}><EditIcon /></Fab>

        let paperStyle = Object.assign({}, style)
        paperStyle.maxWidth = 500
        paperStyle.marginTop = '5em'

        createDialog = <Box sx={{height: '100vh', width: '100vw', backgroundColor: '#000000aa', position: 'fixed', bottom: '0', right: '0', display: dialogDisplay}}>
        <Paper elevation={3} sx={paperStyle}>
            <IconButton onClick={closeCreateDialog} sx={{float: 'right'}}>
            <CloseIcon />
            </IconButton>
            <Typography variant='h2'>Create a new listing</Typography>
            <Stack spacing={2} direction="column">
                <TextField id='crtName' label='Name' variant='outlined' />
                <TextField id='crtDescription' label='Description' variant='outlined' multiline />
                <Select id='crtCategory' label="Category">
                    <MenuItem value={10}>Lorem</MenuItem>
                    <MenuItem value={20}>Ipsum</MenuItem>
                    <MenuItem value={30}>Dolor</MenuItem>
                </Select>
                <TextField id='crtPrice' label='Price' variant='outlined' InputProps={{endAdornment: <InputAdornment position="end"> CZK</InputAdornment>}}/>
                <Button variant="contained" onClick={closeCreateDialog}>Create listing!</Button>
            </Stack>
        </Paper>
        </Box>
    }
   
    return <ThemeProvider theme={theme}><Box sx={style}>
        <Paper elevation={3} sx={{padding: '0.5em', marginBottom: '0.5em', overflow: 'auto'}}>
        <TextField id='search' label='Search' variant='outlined' onChange={handleSearchChange} sx={{ float: 'left'}}/>
        <Box sx={{ width: '30%', float: 'left', marginLeft: '2em', marginTop: { xs: '1em', md: '0' }}}>
            <Typography variant='body1'>Max price</Typography>
            <Slider defaultValue={0} min={0} max={getMaxPrice(initialListings)} valueLabelDisplay="auto" />
        </Box>
        </Paper>
        {listings.map((item) => (
            <Listing key={item.id} name={item.name} text={item.desc} price={item.price}/>
        ))}
        {btnCreate}
        {createDialog}
        
    </Box></ThemeProvider>
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

function filterListings(listings, searchTerm) {
    
    let filteredListings = []

    listings.forEach(item => {
        if (item.name.includes(searchTerm) || item.desc.includes(searchTerm)){
            filteredListings.push(item)
        }
    })

    return filteredListings
}

export default ListingItems