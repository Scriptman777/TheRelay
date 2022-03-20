import React from "react"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Listing(props) {
    
    return <Paper elevation={3} sx={{marginBottom: '1em', padding: '0.5em'}}>
        <Typography variant="h4" sx={{padding:'1em'}}>{props.name}</Typography>
        <Typography variant='body1' sx={{padding:'0.5em'}}>{props.category}</Typography>
        <Typography variant='body1' sx={{padding:'0.5em'}}>{props.user}</Typography>
        <Typography variant='body1' sx={{padding:'0.5em'}}>{props.text}</Typography>
        <Typography variant='body1' sx={{fontWeight: 'bold'}}>{props.price + " CZK"}</Typography>
    </Paper>
}

export default Listing