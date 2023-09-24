// import { Button } from "@mui/material";
// import Card from '@mui/joy/Card';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "./Api";
import axios from "axios";

import "./Book.css";


import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';


const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, available, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`${API_URL}/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"));
  };
  return (
    // <div className="card">
    //   <img src={image} alt={name} />
    //   <article> By<span>:</span> {author} </article>
    //   <h3>{name}</h3>
    //   <p>{description}</p>
    //   <h3>Rs. {price}</h3>
    //   <div>
    //     <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }} >UPDATE</Button>
    //     <Button onClick={deleteHandler} sx={{ mt: 'auto', color: 'red' }} >DELETE</Button>
    //   </div>
    // </div>
    <div>
      <Card sx={{ width: 320 }} orientation="vertical"
        variant="soft">

        <div>
          <AspectRatio minHeight="300px" maxHeight="500px">
            <img
              src={image}
              alt={name}
            />
          </AspectRatio>
          <Typography sx={{ mt: 1 }} level="title-lg"><h3>{name}</h3> </Typography>
          {available === true ?
            <>
              <CheckCircleIcon sx={{ position: "relative", ml: 33.4, mt: -9 }} variant="solid" color="success"></CheckCircleIcon>
              <Typography sx={{ mt: -3 }} level="title-lg">By<span>:</span> {author}</Typography>
            </> : 
            <Typography sx={{ mt: 1 }} level="title-lg">By<span>:</span> {author}</Typography>
          }
          <Typography level="body-sm"><p>{description}</p></Typography>
        </div>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              Rs. {price}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            LinkComponent={Link} to={`/books/${_id}`}
          >
            UPDATE
          </Button>
          <Button
            variant="solid"
            size="md"
            color="danger"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            onClick={deleteHandler}
          >
            DELETE
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Book;
