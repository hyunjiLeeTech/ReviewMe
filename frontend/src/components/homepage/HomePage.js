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
    date: 2013,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "You Suck at Cooking",
    id: "5KqxDwAAQBAJ",
    author: "Clarkson Potter, You Suck at Cooking",
    date: 2019,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=5KqxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title:
      "The Essential New York Times Cookbook: Classic Recipes for a New Century",
    id: "QWrVBAAAQBAJ",
    author: "Amanda Hesser",
    date: 2010,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=QWrVBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Home Cooking",
    id: "TB4FEAAAQBAJ",
    author: "Laurie Colwin",
    date: 2010,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=TB4FEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "College Cooking",
    id: "UwYJsklz7WkC",
    author: "Megan Carle, Jill Carle",
    date: 2007,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=UwYJsklz7WkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Mastering the Art of Soviet Cooking",
    id: "GGuODQAAQBAJ",
    author: "Anya Von Bremzen",
    date: 2014,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=GGuODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Salt, Fat, Acid, Heat",
    id: "yvqxDgAAQBAJ",
    author: "Samin Nosrat",
    date: 2017,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=yvqxDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Maangchi's Big Book of Korean Cooking",
    id: "ROJ-DwAAQBAJ",
    author: "Maangchi, Martha Rose Shulman",
    date: 2019,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=ROJ-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Cooked",
    id: "be2XOQ2sB_EC",
    author: "Michael Pollan",
    date: 2013,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Where Cooking Begins",
    id: "A9hhDwAAQBAJ",
    author: "Carla Lalli Music",
    date: 2019,
    category: "cooking",
    image:
      "http://books.google.com/books/content?id=A9hhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "The Science of Cooking",
    id: "az8pDwAAQBAJ",
    author: "Stuart Farrimond",
    date: 2017,
    category: "cooking",
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
      filtered = bookList.filter((entry) => {
        return entry.title.toLowerCase().search(value) !== -1;
      });

      setSelectedBook(filtered);
    } else if (authorName !== "") {
      const temp = authorName.toLowerCase();
      filtered = bookList.filter((entry) => {
        return entry.author.toLowerCase().search(temp) !== -1;
      });
      setSelectedBook(filtered);
    } else if (year !== "") {
      console.log(year);
      const tempYear = year;
      filtered = bookList.filter((entry) => {
        return entry.date.toString().search(tempYear) !== -1;
      });
      setSelectedBook(filtered);
    }
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
      <SliderImage />
      <div className="grid container">
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
                  <option value="horror">Horror</option>
                  <option value="cooking">Cooking</option>
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
            <div className="search_result">
              {selectedBook.map((book, index) => (
                <SearchResult
                  key={index}
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  date={book.date}
                  category={book.category}
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
