import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "./Api";
import axios from "axios";

import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`${API_URL}/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"));
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article> By<span>:</span> {author} </article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs. {price}</h3>
      <div>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }} >UPDATE</Button>
        <Button onClick={deleteHandler} sx={{ mt: 'auto', color: 'red' }} >DELETE</Button>
      </div>
    </div>
  );
};

export default Book;
