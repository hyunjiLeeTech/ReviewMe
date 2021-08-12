import React, { useState, useEffect } from "react";

import BookLoading from "../style/BookLoading";
import Home from "./Home";
import BooksDataService from "../../services/BooksDataService";

const HomePage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState();

  useEffect(() => {
    BooksDataService.getAllBooks("fiction", 15).then((books) => {
      setBooks(books.items);
    });
  }, []);

  return <div>{isLoading ? <BookLoading /> : <Home books={books} />}</div>;
};

export default HomePage;
