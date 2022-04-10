import React from "react"
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

// Component with buttons for the MenuBar
function MenuButtons() {

    // State for displaying login-specific options
    const [authed, setAuthed] = React.useState(false)
    const [user, setUser] = React.useState('')

    // Check on init
    React.useEffect(() => {
        CheckLogin()
    }, [])

    // Check function
    async function CheckLogin(){
        const token = localStorage.getItem('auth-key')
        if (token == null) {
            setAuthed(false)
        }

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', token)
    
        await fetch('http://localhost:5000/account/me', {
            method: 'GET',
            headers: headers,
          })
          .then(function(response) {
            if (response.status === 200) {
                response.json().then(data => setUser(data.username))
                setAuthed(true)
            }
            else {
                setAuthed(false) 
            }
        })
    }

    // Function for the logout option
    async function logout() {
        const token = localStorage.getItem('auth-key')

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', token)

        localStorage.removeItem("auth-key")
        await fetch('http://localhost:5000/account/logout', {
            method: 'GET',
            headers: headers,
          })
    }
    
    // Components to be displayed when logged out
    let logInOut = <Link color="black" underline="none" href="/login"><MenuItem key="Login">Login</MenuItem></Link>
    let myAcc = <></>
    // Components to be displayed when logged in
    if (authed) {
        logInOut = <Link color="black" underline="none" href="/"><MenuItem key="Logout" onClick={logout}>Logout</MenuItem></Link>
        myAcc = <Link color="black" underline="none" href="/myaccount"><MenuItem key="MyAcc">{'My listings (' + user + ')'}</MenuItem></Link>
    }

    // Menu itself
    return <>
    <Link color="black" underline="none" href="/"><MenuItem>Main</MenuItem></Link>
    <Link color="black" underline="none" href="/about"><MenuItem key="About">About</MenuItem></Link>
    <Link color="black" underline="none" href="/buy"><MenuItem key="Buy">Buy</MenuItem></Link>
    <Link color="black" underline="none" href="/sell"><MenuItem key="Sell">Sell</MenuItem></Link>
    <Link color="black" underline="none" href="/legal"><MenuItem key="Legal">Legal</MenuItem></Link>
    {myAcc}
    {logInOut}
    </>

}



export default MenuButtons