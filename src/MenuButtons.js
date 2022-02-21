import React from "react"
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


function MenuButtons() {

    return <>
    <MenuItem key="Main" >
    <Typography textAlign="center">Main</Typography>
    </MenuItem>
    <MenuItem key="About">
    <Typography textAlign="center">About</Typography>
    </MenuItem>
    <MenuItem key="Buy">
    <Typography textAlign="center">Buy</Typography>
    </MenuItem>
    <MenuItem key="Sell">
    <Typography textAlign="center">Sell</Typography>
    </MenuItem>
    <MenuItem key="Legal">
    <Typography textAlign="center">Legal</Typography>
    </MenuItem>
    </>

}

export default MenuButtons