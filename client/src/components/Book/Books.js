import React, { useEffect, useState } from "react";
import axois from "axios";
import Book from "./Book";

import "./Book.css";
import NotFound from "./NotFound";
import { API_URL } from "./Api";

const fetchHandler = async () => {
  return await axois.get(API_URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();

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
