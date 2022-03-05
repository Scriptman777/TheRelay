import React from "react"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Listing.css'

function Listing(props) {
    
    return <Paper elevation={3} sx={{marginBottom: '1em', padding: '0.5em'}}>
        <img src='https://1gr.cz/fotky/lidovky/17/013/maxi/EBR505985_hamburger.jpg' alt="Item being sold"></img>
        <Typography variant="h4" sx={{padding:'1em'}}>{props.name}</Typography>
        <Typography sx={{padding:'1em'}}>{props.text}</Typography>
    </Paper>
}

export default Listing