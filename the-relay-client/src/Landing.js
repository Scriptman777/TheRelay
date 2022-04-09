import React from "react"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { GetPaddedStyle } from './theme.js'

// First page the user sees when entering the site
function Landing() {

    // Init style
    const style = GetPaddedStyle()
    style.maxWidth = 500
    
    return <Paper elevation={3} sx={style}>
    <Typography variant="h2">
    Welcome!
    </Typography>
    <Typography variant="body1" display="block">
    Welcome to The Relay. A site that facilitates buying and selling of goods among users. You will need to create an account first, but don't worry, it takes just a minute! We hope you enjoy using our services! 
    </Typography>
    </Paper>
}

export default Landing