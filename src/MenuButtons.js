import React from "react"
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function MenuButtons() {

    return <>
    <Link color="black" underline="none" href="/"><MenuItem>Main</MenuItem></Link>
    <Link color="black" underline="none" href="/about"><MenuItem key="About">About</MenuItem></Link>
    <Link color="black" underline="none" href="/buy"><MenuItem key="Buy">Buy</MenuItem></Link>
    <Link color="black" underline="none" href="/sell"><MenuItem key="Sell">Sell</MenuItem></Link>
    <Link color="black" underline="none" href="/legal"><MenuItem key="Legal">Legal</MenuItem></Link>
    </>

}

export default MenuButtons