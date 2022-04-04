import React from "react"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { GetPaddedStyle } from './theme.js'

function Login(props) {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    const usernameUpdate = (event) => {
        setUsername(event.target.value)
    }

    const passwordUpdate = (event) => {
        setPassword(event.target.value)
    }

    const emailUpdate = (event) => {
      setEmail(event.target.value)
  }

    const style = GetPaddedStyle()
    style.maxWidth = 500

    let name = "Create account"
    let createPrompt = <></>
    let emailField = <></>

    if (!props.create) {
        createPrompt = <Typography variant="body2">
        Don't have an account? Why not <Link underline='none' href="/signup">create one</Link>?
        </Typography>
        name = "Log in"
    }
    else 
    {
      emailField = <TextField id='email' label='E-mail' variant='outlined' onChange={emailUpdate} value={email}/>
    }

    
    const buttonClicked = async (event) => {

        if (props.create) {
            
            let newAccount = {username: username, email: email, password: password}

            await fetch("http://localhost:5000/account/add", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newAccount),
              })
              .then(
                console.log("ADDED"),
                setUsername(''),
                setPassword(''),
                setEmail('')
                )
              .catch(error => {
                window.alert(error);
                return;
              })
        }
        else {
          let loginInfo = {username: username, password: password}

          await fetch("http://localhost:5000/account/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(loginInfo),
              })
              .then(response => response.json())
              .then(data => localStorage.setItem("auth-key", data.token))  
              .catch(error => {
                window.alert(error);
                return;
              })
          setUsername('')
          setPassword('')
          setEmail('')
          document.location.href="/";
        }
    }
    
    return <Paper elevation={3} sx={style}>
    <Typography variant="h2">
    {name}
    </Typography>
    <Stack spacing={2} direction="column">
    <TextField id='username' label='Username' variant='outlined' onChange={usernameUpdate} value={username}/>
    {emailField}
    <TextField id='password' label='Password' variant='outlined' onChange={passwordUpdate} value={password} type="password" autoComplete="current-password" />
    <Button variant="contained" onClick={buttonClicked}>{name}!</Button>
    {createPrompt}
    </Stack>
    </Paper>
}

export default Login