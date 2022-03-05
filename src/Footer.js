import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GetPaddedStyle } from './theme.js'

function Footer() {
    
    const style = GetPaddedStyle()

    return <footer>
        <Box sx={style}>
            <Typography variant="body2">
            This site is a student project for TNPW2. Author: David Továrek 2022
            </Typography>
        </Box>
    </footer>
}

export default Footer