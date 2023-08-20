// import express from "express";
// import router from "./routes/book-routes.js";
// import cors from "cors";
// import mongoose from "mongoose";
// require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/book-routes.js");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/books', router);

// const PORT = process.env.PORT || 8000; 
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    const PORT = process.env.PORT || 8000;
    console.log("DB Connection Successfull");
    app.listen(PORT, () => {
      console.log(`App is Listening on PORT ${PORT}`);
    });
    
  }).catch((err)=>{
    console.log(err);
})
// Connection();

