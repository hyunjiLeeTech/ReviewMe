import React, { useState } from "react";
import { Route, useParams, Link } from "react-router-dom";
import BookListing from "./BookListing";
import SliderImage from "./SliderImage";
import SearchResult from "./SearchResult";

import "./HomePage.css";

const bookList = [
  {
    title: "Cooked",
    id: "be2XOQ2sB_EC",
    author: "Michael Pollan",
    image:
      "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "You Suck at Cooking",
    id: "5KqxDwAAQBAJ",
    author: "Clarkson Potter, You Suck at Cooking",
    image:
      "http://books.google.com/books/content?id=5KqxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title:
      "The Essential New York Times Cookbook: Classic Recipes for a New Century",
    id: "QWrVBAAAQBAJ",
    author: "Amanda Hesser",
    image:
      "http://books.google.com/books/content?id=QWrVBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Home Cooking",
    id: "TB4FEAAAQBAJ",
    author: "Laurie Colwin",
    image:
      "http://books.google.com/books/content?id=TB4FEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "College Cooking",
    id: "UwYJsklz7WkC",
    author: "Megan Carle, Jill Carle",
    image:
      "http://books.google.com/books/content?id=UwYJsklz7WkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Mastering the Art of Soviet Cooking",
    id: "GGuODQAAQBAJ",
    author: "Anya Von Bremzen",
    image:
      "http://books.google.com/books/content?id=GGuODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Salt, Fat, Acid, Heat",
    id: "yvqxDgAAQBAJ",
    author: "Samin Nosrat",
    image:
      "http://books.google.com/books/content?id=yvqxDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Maangchi's Big Book of Korean Cooking",
    id: "ROJ-DwAAQBAJ",
    author: "Maangchi, Martha Rose Shulman",
    image:
      "http://books.google.com/books/content?id=ROJ-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Cooked",
    id: "be2XOQ2sB_EC",
    author: "Michael Pollan",
    image:
      "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Where Cooking Begins",
    id: "A9hhDwAAQBAJ",
    author: "Carla Lalli Music",
    image:
      "http://books.google.com/books/content?id=A9hhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "The Science of Cooking",
    id: "az8pDwAAQBAJ",
    author: "Stuart Farrimond",
    image:
      "http://books.google.com/books/content?id=az8pDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
];
const HomePage = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [year, setYear] = useState("");
  const [searching, setSearching] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [selectedBook, setSelectedBook] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setSearching(true);
    let filtered = [];
    if (bookName !== "") {
      const value = bookName.toLowerCase();
      console.log(value);
      console.log(bookName);
      console.log(bookList);
      filtered = bookList.filter((entry) => {
        return entry.title.toLowerCase().search(value) !== -1;
      });
      console.log(filtered);
    }
    setSelectedBook(filtered);
    console.log(selectedBook);
  };
  const onChangeBookNameHandler = (name) => {
    setBookName(name.target.value);
  };
  const onChangeAuthorNameHandler = (author) => {
    setAuthorName(author.target.value);
  };
  const onChangeYearHandler = (year) => {
    setYear(year.target.value);
  };
  const onClearHandler = () => {
    setBookName("");
    setAuthorName("");
    setYear("");
  };
  return (
    <>
      {!searching && <SliderImage />}
      <div className="grid">
        <div className="searchBar">
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              name="bookName"
              placeholder="search by book title"
              value={bookName}
              onChange={onChangeBookNameHandler}
            />
            <input
              type="text"
              name="author"
              placeholder="search by author"
              value={authorName}
              onChange={onChangeAuthorNameHandler}
            />
            <input
              type="text"
              name="year"
              placeholder="filter by year"
              value={year}
              onChange={onChangeYearHandler}
            />
            <div className="category-selector">
              <div className="category-selector__control">
                <select name="category">
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="comic_book">Comic Book</option>
                  <option value="detective">Detective</option>
                  <option value="mystery">Mystery</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="Horror">Horror</option>
                </select>
              </div>
            </div>
            <div className="sorting-selector">
              <div className="sorting-selector__control">
                <select name="sorting">
                  <option value="reviews_hi_low">Reviews Hi-Low</option>
                  <option value="reviews_low_hi">Reviews Low-Hi</option>
                  <option value="rating_hi_low">Rating Hi-Low</option>
                  <option value="rating_low_hi">Rating Low-Hi</option>
                </select>
              </div>
            </div>
            <button type="submit">Search</button>
            <button type="reset" onClick={onClearHandler}>
              Clear
            </button>
          </form>
        </div>

        <div>
          {!searching && <BookListing bookList={bookList} />}
          {searching && (
            <div className="search-result">
              {selectedBook.map((book, index) => (
                <SearchResult
                  key={index}
                  image={book.image}
                  title={book.title}
                  author={book.author}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
