import React from "react"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Listing.css'

function Listing(props) {
    
    return <Paper elevation={3}>
        <img src='https://1gr.cz/fotky/lidovky/17/013/maxi/EBR505985_hamburger.jpg'></img>
        <Typography variant="h4" sx={{padding:'1em'}}>{props.name}</Typography>
        <Typography sx={{padding:'1em'}}>{props.text}</Typography>
    </Paper>
}

export default Listing