import React from "react"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import BallotIcon from '@mui/icons-material/Ballot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button'

function Listing(props) {
    
    return <Paper elevation={3} sx={{marginBottom: '1em', padding: '0.5em'}}>

        <Typography variant="h4" sx={{padding:'1em'}}>{props.name}</Typography>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccountCircleIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="User" secondary={props.user.username} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <BallotIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Category" secondary={props.category} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PointOfSaleIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Price" secondary={props.price + " CZK"} />
            </ListItem>
        </List>
        
        <Typography variant='body1' sx={{padding:'0.5em'}}>{props.description}</Typography>
        <Button variant="contained" sx={{padding:'0.5em'}} href={'mailto:' + props.user.email + '?subject=I have seen your post: ' + props.name + ' and I am intereted!'}>I am interested!</Button>
    </Paper>
}

export default Listing