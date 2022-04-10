import React from "react"
import  { Navigate } from 'react-router-dom'
import EditableListing from  "./EditableListing"   
import { GetTheme, GetPaddedStyle } from './theme.js'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NoListings from "./NoListings"

// Screen with user's listings
function Account() {

    // Init style
    const style = GetPaddedStyle()
    const theme = GetTheme()

    // Create states
    const [authed, setAuthed] = React.useState(true)
    const [listings, setListings] = React.useState([])

    // Get listings on component load
    React.useEffect(() => {
        getUserListings()
      }, [])


    // Fetch functions 
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

    async function getUserListings() {
        const token = localStorage.getItem('auth-key')
        if (token == null) {
            setAuthed(false)
        }

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', token)

        await fetch("http://localhost:5000/listing/getUserListings", {
            method: "GET",
            headers: headers,
            }).then(response => response.json())
            .then(data => setListings(data))  
    }

    CheckLogin()


    // Display site only if user is logged in, otherwise go to login
    if (authed) {
        let displayedListings = <></>
        if (listings.length > 0) {
            displayedListings = listings.map((item) => (
                <EditableListing key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} user={item.user} category={item.category} />
            ))
        }
        else {
            displayedListings = <NoListings />
        }
        


        return <ThemeProvider theme={theme}>
            <Box sx={style}>
            <Typography variant="h3" sx={{padding:'1em'}}>My listings</Typography>
            {displayedListings}
            </Box>
            </ThemeProvider>
        
    }
    return <Navigate to='/login' />  

}



export default Account