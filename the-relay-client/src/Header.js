import React from "react"
import Box from '@mui/material/Box';
import './Header.css'
import { GetPaddedStyle } from './theme.js'

// Header of the site, only displays on larger screens
function Header() {

    // Init style
    const style = GetPaddedStyle()
    style.display = { xs: 'none', md: 'block' }
    
    return <Box sx={style}>
        <img src='img/logo.png' alt="Page logo"></img>
    </Box>
}

export default Header