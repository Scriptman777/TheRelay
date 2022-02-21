import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';
import './Menu.css'
import GetTheme from './theme.js'

function Menu() {
    const theme = GetTheme()
    
    return <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
                </IconButton>
                <MenuItem key="Main">
                <Typography textAlign="center">Main</Typography>
                </MenuItem>
                <MenuItem key="About">
                <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem key="Buy">
                <Typography textAlign="center">Buy</Typography>
                </MenuItem>
                <MenuItem key="Sell">
                <Typography textAlign="center">Sell</Typography>
                </MenuItem>
                <MenuItem key="Legal">
                <Typography textAlign="center">Legal</Typography>
                </MenuItem>
            </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
}

export default Menu