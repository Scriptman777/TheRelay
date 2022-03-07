import React from "react"
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; 
import Link from '@mui/material/Link';
import { GetPaddedStyle } from './theme.js'


function About() {


    const style = GetPaddedStyle()
    const pad = {padding: '1.5em'}
    
    return <Box sx={style}>
    <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} md={6}>
            <Paper sx={pad}>
                <Typography variant='h3'>What is The Relay?</Typography>
                <Typography variant="body1">The Relay is a site where you can buy or sell items. If you want to buy an item, you don't even have to register! Simply contact the seller!</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
            <Paper sx={pad}>
                <Typography variant='h3'>How does selling items work?</Typography>
                <Typography variant="body1">To sell items on The Relay you first need to make an accout, then you can create listing for the items you wish to sell. People interested in buying them can get in touch with you via the contacts provided by you</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
            <Paper sx={pad}>
                <Typography variant='h3'>How does The Relay stay afloat?</Typography>
                <Typography variant="body1">We take a small percetage form every transaction that happens on the service.</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
            <Paper sx={pad}>
                <Typography variant='h3'>Is my personal information safe?</Typography>
                <Typography variant="body1">Of course it is! If you have any doubts or concerns, please feel free to contact us. For more information check out the <Link href="/legal">Legal</Link> page</Typography>
            </Paper>
        </Grid>
    </Grid>
    </Box>
}

export default About