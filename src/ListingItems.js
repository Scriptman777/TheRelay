import React from "react"
import Listing from "./Listing"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import { GetTheme, GetPaddedStyle } from './theme.js'
import { ThemeProvider } from '@mui/material/styles';

function ListingItems(props) {

    const style = GetPaddedStyle()
    const theme = GetTheme()

    const initialListings = [{name: 'Name1', desc: 'Lorem ipsum', price: 100, id: 1},{name: 'Name2', desc: 'Ipsum lorem dolor', price: 200, id: 2},{name: 'Name3', desc: 'Lorem ipsum etc etc 🍔', price: 150, id: 3}]
    

    const [listings, setListings] = React.useState(initialListings)

    const handleSearchChange = (event) => {
      let newList = filterListings(initialListings, event.target.value)
      setListings(newList)
      console.log(newList)
    };

    let btnCreate = <></>

    if (!props.buy) {
        btnCreate = <Fab color="primary" sx={{ position: 'fixed', bottom: '10vh', right: '10vw' }}><EditIcon /></Fab>
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