import React from "react"
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

function EditableListing(props) {

    const [allCategories, setAllCategories] = React.useState([])
    const [category, setCategory] = React.useState(props.category)
    const [name, setName] = React.useState(props.name)
    const [description, setDescription] = React.useState(props.description)
    const [price, setPrice] = React.useState(props.price)

    async function getCategories() {
        await fetch('http://localhost:5000/category/getAll')
        .then(response => response.json())
        .then(data => setAllCategories(data))  
    }

    const updateCategory = (event) => {
        setCategory(event.target.value)
    }

    const updateName = (event) => {
        setName(event.target.value)
    }

    const updateDescription = (event) => {
        setDescription(event.target.value)
    }

    const updatePrice = (event) => {
        setPrice(event.target.value)
    }

    async function updateListing() {
        let updatedListing = {id: props.id, name: name, description: description, category: category, price: price}

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', localStorage.getItem('auth-key'))

        await fetch("http://localhost:5000/listing/update", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(updatedListing),
            })
            .then(response => {
                if (response.status !== 201)
                {
                  response.json().then(data => window.alert("Could not update listing because of the following error:\n" + data.message))
                  return
                }
                else {
                    window.location.reload()
                }
            })
            .catch(err => {
            window.alert(err)
            return
        })
    }

    async function deleteListing() {

        if (window.confirm("Are you sure you want to delete " + name + " ?") === true) {
            const headers = new Headers()
            headers.append('Content-Type', 'application/json')
            headers.append('Authorization', localStorage.getItem('auth-key'))
    
            let listingToDelete = {id: props.id}
    
            await fetch("http://localhost:5000/listing/delete", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(listingToDelete),
                })
                .then(response => {
                    if (response.status !== 200)
                    {
                      response.json().then(data => window.alert("Could not delete listing because of the following error:\n" + data.message))
                      return
                    }
                    else {
                        window.location.reload()
                    }
                })
                .catch(error => {
                window.alert(error);
                return;
            })
          } 
    }

    React.useEffect(() => {
        getCategories()
      }, [])
    
    return <Paper elevation={3} sx={{marginBottom: '1em', padding: '0.5em'}}>
        <Typography variant="h4" sx={{padding:'1em'}}>{props.name}</Typography>
        <Stack spacing={2} direction="column" sx={{paddingBottom: '1em'}}>
        <TextField id='lstName' label='Name' variant='outlined' onChange={updateName} value={name}/>
        <TextField id='lstDescription' label='Description' variant='outlined' multiline onChange={updateDescription} value={description}/>
        <Select id='crtCategory' value={category} onChange={updateCategory}>
                {allCategories.map((cat) => (
                <MenuItem key={cat.name} value={cat.name}>{cat.name}</MenuItem>
                ))}
        </Select>
        <TextField id='crtPrice' label='Price' variant='outlined' InputProps={{endAdornment: <InputAdornment position="end"> CZK</InputAdornment>}} onChange={updatePrice} value={price}/>

        </Stack>

        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={updateListing}>Update listing</Button>
        <Button variant="contained" onClick={deleteListing} sx={{backgroundColor: 'red'}}>Delete listing</Button>
        </Stack>

    </Paper>
}

export default EditableListing