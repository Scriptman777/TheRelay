import React from "react"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { GetPaddedStyle } from './theme.js'

function Login(props) {

    const style = GetPaddedStyle()
    style.maxWidth = 500

    let name = "Create account"
    let createPrompt = <></>

    if (!props.create) {
        createPrompt = <Typography variant="body2">
        Don't have an account? Why not <Link underline='none' href="/signup">create one</Link>?
        </Typography>
        name = "Log in"
    }
    
    return <Paper elevation={3} sx={style}>
    <Typography variant="h2">
    {name}
    </Typography>
    <Stack spacing={2} direction="column">
    <TextField id='username' label='Username' variant='outlined' />
    <TextField id='password' label='Password' variant='outlined' type="password" autoComplete="current-password" />
    <Button variant="contained">{name}!</Button>
    {createPrompt}

    </Stack>
    </Paper>
}

export default Login