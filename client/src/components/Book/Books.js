import React, { useEffect, useState } from "react";
import axois from "axios";
import Book from "./Book";

import "./Book.css";
import NotFound from "./NotFound";


const URL = "http://localhost:8000/books";
const fetchHandler = async () => {
  return await axois.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();

  // it only run after the components render into browser and it will only run once
  // it also depend on the dependency array
  // if dependency array change then it will run automatically
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
   // console.log(books);
  return (
    <div>
      <ul>
        {books?
          books.map((book, id) => (
            <li key={id}>
              <Book book={book} />
            </li>

          )) : <NotFound />}
      </ul>
    </div>
  );
};

export default Books;
