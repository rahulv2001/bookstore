import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./Book/Api";

const AddBook = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    name: "",
    author: "",
    description: "",
    price: "",

    image: "",
  });

  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const API_URL = "http://localhost:8000/books";

  const sendRequest = async () => {
    await axios
      .post(API_URL, {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
    // console.log(input, checked);
  };
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
            Add Book
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddBook;
