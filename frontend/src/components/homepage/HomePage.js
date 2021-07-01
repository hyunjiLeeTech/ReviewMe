import React, { useState } from "react";
import { Route, useParams, Link } from "react-router-dom";
import BookListing from "./BookListing";
import SliderImage from "./SliderImage";
import SearchResult from "./SearchResult";

import "./HomePage.css";

const HomePage = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [year, setYear] = useState("");
  const [searching, setSearching] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (bookName === "") {
      alert("Please enter something!");
    } else {
      setBookName("");
      setAuthorName("");
      setYear("");
    }
    setSearching(true);
  };

  const advancedSearchHandler = () => {
    setAdvancedSearch((prevState) => !prevState);
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

  return (
    <>
      {!searching && <SliderImage />}
      <div className="grid">
        <div className="searchBar">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="bookName"
              placeholder="search by book title"
              value={bookName}
              onChange={onChangeBookNameHandler}
            />
            {!advancedSearch && (
              <button onClick={advancedSearchHandler}>Advanced Search</button>
            )}
            {advancedSearch && (
              <>
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
              </>
            )}
          </form>
        </div>

        <div>
          <BookListing />
        </div>
      </div>
    </>
  );
};

export default HomePage;
