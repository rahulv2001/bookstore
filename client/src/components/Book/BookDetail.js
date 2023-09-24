import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_URL } from './Api';
import axios from "axios";
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";

const BookDetail = () => {
    const id = useParams().id;
    // console.log(id);
    const history = useNavigate();
    const [input, setInput] = useState({
        name: "",
        author: "",
        description: "",
        price: "",
        image: "",
    });
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`${API_URL}/${id}`).then((res) => res.data).then((data) => setInput(data.book));
        }
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`${API_URL}/${id}`, {
            name: String(input.name),
            author: String(input.author),
            description: String(input.description),
            price: Number(input.price),
            image: String(input.image),
            available: Boolean(checked),
        }).then((res) => res.data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/books"))
    }

    const handleChange = (e) => {
        // console.log(e);
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    // console.log(input);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent={"center"}
                    maxWidth={600}
                    alignContent={"center"}
                    alignSelf={"center"}
                    marginLeft={"auto"}
                    marginRight={"auto"}
                    marginTop={3}
                >
                    <FormLabel>Name</FormLabel>
                    <TextField
                        value={input.name}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="name"
                    />
                    <FormLabel>Author</FormLabel>
                    <TextField
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="author"
                        value={input.author}
                        onChange={handleChange}
                    />
                    <FormLabel>Description</FormLabel>
                    <TextField
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="description"
                        value={input.description}
                        onChange={handleChange}
                    />
                    <FormLabel>Price</FormLabel>
                    <TextField
                        type="number"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="price"
                        value={input.price}
                        onChange={handleChange}
                    />
                    <FormLabel>Image URL</FormLabel>
                    <TextField
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="image"
                        value={input.image}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={checked} />}
                        label="Available"
                        onChange={() => setChecked(!checked)}
                    />

                    <Button variant="contained" type="submit">
                        Update Book
                    </Button>
                </Box>
            </form>
        </>
    )
}

export default BookDetail