import React from "react"
import './ListingItems.css'
import Listing from "./Listing"

function ListingItems() {



    const listings = [{name: 'Name1', text: 'Lorem ipsum'},{name: 'Name2', text: 'Ipsum lorem dolor'},{name: 'Name3', text: 'Lorem ipsum etc etc 🍔'}]
    
    return <div id="items">
        {listings.map((item) => (
            <Listing name={item.name} text={item.text} />
        ))}
        
    </div>
}

export default ListingItems