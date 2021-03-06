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
    const [passwordCheck, setPasswordCheck] = React.useState('')
    const [email, setEmail] = React.useState('')


    const usernameUpdate = (event) => {
        setUsername(event.target.value)
    }

    const passwordUpdate = (event) => {
        setPassword(event.target.value)
    }

    const passwordCheckUpdate = (event) => {
      setPasswordCheck(event.target.value)
    }

    const emailUpdate = (event) => {
      setEmail(event.target.value)
    }

    const style = GetPaddedStyle()
    style.maxWidth = 500

    let name = "Create account"
    let createPrompt = <></>
    let emailField = <></>
    let passCheckField = <></>

    
    const submitLogin = async (event) => {
        event.preventDefault()
        if (props.create) {
            if (password === passwordCheck) {
              let newAccount = {username: username, email: email, password: password}

              await fetch("http://localhost:5000/account/add", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newAccount),
                })
                .then(response => {
                  if (response.status !== 201) {
                    response.json().then(data => window.alert("Could not create account because of the following error:\n" + data.message))
                    return
                  }
                  setUsername('')
                  setPassword('')
                  setEmail('')
                  document.location.href="/login"
              })
              .catch(err => {
                window.alert("Could not create account because of the following error:\n" + err)
              return
              })
            }
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
              .then(response => {
                if (response.status !== 200){
                  response.json().then(data => window.alert("Could not log in because of the following error:\n" + data.message))
                  return
                }
                else {
                  response.json().then(data => {
                    localStorage.setItem("auth-key", data.token)
                    setUsername('')
                    setPassword('')
                    setEmail('')
                    document.location.href="/"
                  })
                }
              })
              .catch(err => {
                window.alert(err)
              })
        }
    }

    if (!props.create) {
      createPrompt = <Typography variant="body2">
      Don't have an account? Why not <Link underline='none' href="/signup">create one</Link>?
      </Typography>
      name = "Log in"
    }
    else 
    {
      emailField = <TextField required id='email' label='E-mail' variant='outlined' onChange={emailUpdate} value={email}/>
      passCheckField = <TextField required id='pass2' label='Confirm pasword' variant='outlined' type="password" helperText={password !== passwordCheck ? 'Password does not match!' : ' '} error={password !== passwordCheck} onChange={passwordCheckUpdate} value={passwordCheck}/>
    }
    
    return <Paper elevation={3} sx={style}>
    <form onSubmit={submitLogin}> 
    <Typography variant="h2">
    {name}
    </Typography>
    <Stack spacing={2} direction="column">
    <TextField required id='username' label='Username' variant='outlined' onChange={usernameUpdate} value={username}/>
    {emailField}
    <TextField required id='password' label='Password' variant='outlined' onChange={passwordUpdate} value={password} type="password" autoComplete="current-password" />
    {passCheckField}
    <Button variant="contained" type="submit">{name}!</Button>
    {createPrompt}
    </Stack>
    </form>
    </Paper>
}

export default Login