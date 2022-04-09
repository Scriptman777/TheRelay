import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GetPaddedStyle } from './theme.js'

// Site footer
function Footer() {
    
    // Init style
    const style = GetPaddedStyle()

    // Just a Box with text on the bottom
    return <footer>
        <Box sx={style}>
            <Typography variant="body2">
            This site is a student project for TNPW2. Author: David Továrek 2022
            </Typography>
        </Box>
    </footer>
}

export default Footer