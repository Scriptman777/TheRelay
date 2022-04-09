import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import './MenuBar.css'
import { GetTheme, GetPaddedStyle } from './theme.js'
import MenuButtons from "./MenuButtons";

// Main navigation component for the page
function MenuBar() {

    // Init style
    const theme = GetTheme()
    const style = GetPaddedStyle()
    style.width = { xs: '100%', md: '80%' }
    style.flexGrow = 1
    style.marginBottom = '1.5em'
    style.padding = 0

    // Create state for mobile menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // Handlers for mobile menu
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    // Component is a toolbar with MenuButtons
    return <ThemeProvider theme={theme}>
        <Box sx={style}>
            <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }}} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <MenuIcon />
                </IconButton>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                <MenuButtons />
                </Menu>

                <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                <MenuButtons />
                </Box>
            </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
}

export default MenuBar