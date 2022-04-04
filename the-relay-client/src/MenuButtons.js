import React from "react"
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';


function MenuButtons() {

    const [authed, setAuthed] = React.useState(false)

    React.useEffect(() => {
        CheckLogin()
    }, [])

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
                setAuthed(true)
            }
            else {
                setAuthed(false) 
            }
            
        })
    }

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
    

    let logInOut = <Link color="black" underline="none" href="/login"><MenuItem key="Login">Login</MenuItem></Link>
    let myAcc = <></>
    if (authed) {
        logInOut = <Link color="black" underline="none" href="/"><MenuItem key="Logout" onClick={logout}>Logout</MenuItem></Link>
        myAcc = <Link color="black" underline="none" href="/myaccount"><MenuItem key="MyAcc">My listings</MenuItem></Link>
    }



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