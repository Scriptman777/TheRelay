import React from "react"
import Listing from "./Listing"
import Box from '@mui/material/Box';
import { GetPaddedStyle } from './theme.js'

function ListingItems() {

    const style = GetPaddedStyle()

    const listings = [{name: 'Name1', text: 'Lorem ipsum'},{name: 'Name2', text: 'Ipsum lorem dolor'},{name: 'Name3', text: 'Lorem ipsum etc etc 🍔'}]
    
    return <Box sx={style}>
        {listings.map((item) => (
            <Listing name={item.name} text={item.text} />
        ))}
        
    </Box>
}

export default ListingItems