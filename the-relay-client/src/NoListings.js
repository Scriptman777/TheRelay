import React from "react"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { GetPaddedStyle } from './theme.js'

// Component to show when no listings match search
function NoListings() {

    // Init style
    const style = GetPaddedStyle()
    style.maxWidth = 500
    
    return <Paper elevation={3} sx={style}>
    <Typography variant="h2" sx={{marginBottom: '0.5em'}}>
    :(
    </Typography>
    <Typography variant="body1" display="block">
        No listings match what you are looking for!
    </Typography>
    </Paper>
}

export default NoListings