import React from "react"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { GetPaddedStyle } from './theme.js'

function Landing() {

    const style = GetPaddedStyle()
    style.maxWidth = 500
    
    return <Paper elevation={3} sx={style}>
    <Typography variant="h2">
    Welcome!
    </Typography>
    <Typography variant="body1" display="block">
    Welcome to The Relay. A site that facilitates buying and selling of goods among users. There is no need to register if you want to buy something, you can just contact the seller directly. However, if you want to sell an item, you will need to create an account first, but don't worry, it takes just a minute! 
    </Typography>
    </Paper>
}

export default Landing