import React, { useState, useMemo, useEffect } from "react";
import BookListing from "./BookListing";
import SliderImage from "./SliderImage";
import SearchResult from "./SearchResult";
import Pagination from "../style/Pagination";

import BooksDataService from "../../services/BooksDataService";

import "./HomePage.css";

let PageSize = 8;

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [year, setYear] = useState("");
  const [searching, setSearching] = useState(false);
  const [selectedBook, setSelectedBook] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setSearching(true);
    let filtered = [];
    if (
      selectedCategory &&
      bookName === "" &&
      year === "" &&
      authorName === ""
    ) {
      const filteredArray = books.filter((entry) => {
        return (
          entry.volumeInfo.categories.toLowerCase() ===
          selectedCategory.toLowerCase()
        );
      });
      let newFiltered = [];
      if (authorName !== "") {
        newFiltered = filteredArray.filter((entry) => {
          return (
            entry.volumeInfo.authors.toLowerCase().search(authorName) !== -1
          );
        });
        setSelectedBook(newFiltered);
      } else if (authorName !== "" && year !== "") {
        filtered = newFiltered.filter((entry) => {
          return entry.volumeInfo.publishedDate.toString().search(year) !== -1;
        });
        setSelectedBook(filtered);
      } else {
        setSelectedBook(filteredArray);
      }
    } else if (bookName !== "") {
      let newFiltering = [];
      const value = bookName.toLowerCase();
      filtered = books.filter((entry) => {
        return entry.volumeInfo.title.toLowerCase().search(value) !== -1;
      });

      if (authorName !== "") {
        const author = authorName.toLowerCase();
        newFiltering = filtered.filter((entry) => {
          return (
            entry.volumeInfo.authors.toString().toLowerCase().search(author) !==
            -1
          );
        });
        setSelectedBook(newFiltering);
      } else if (selectedCategory !== "") {
        let filteredByCategory = filtered.filter((entry) => {
          return entry.volumeInfo.categories.toLowerCase() === selectedCategory;
        });
        setSelectedBook(filteredByCategory);
      } else if (selectedCategory !== "" && authorName !== "") {
        const author = authorName.toLowerCase();
        newFiltering = filtered.filter((entry) => {
          return entry.volumeInfo.authors.toLowerCase().search(author) !== -1;
        });
        setSelectedBook(newFiltering);

        let filteredByCategory = newFiltering.filter((entry) => {
          return (
            entry.volumeInfo.categories
              .toLowerCase()
              .search(selectedCategory) !== -1
          );
        });

        setSelectedBook(filteredByCategory);
      } else {
        setSelectedBook(filtered);
      }
    } else if (authorName !== "") {
      const temp = authorName.toLowerCase();
      filtered = books.filter((entry) => {
        return (
          entry.volumeInfo.authors.toString().toLowerCase().search(temp) !== -1
        );
      });
      if (year !== "") {
        let newFilter = filtered.filter((entry) => {
          return entry.volumeInfo.publishedDate.toString().search(year) !== -1;
        });
        setSelectedBook(newFilter);
      } else {
        setSelectedBook(filtered);
      }
    } else if (year !== "") {
      const tempYear = year;
      filtered = books.filter((entry) => {
        return (
          entry.volumeInfo.publishedDate.toString().search(tempYear) !== -1
        );
      });
      setSelectedBook(filtered);
    }
    if (selectedRating) {
      if (selectedRating === "rating_hi_low") {
        filtered = books.sort(
          (a, b) => b.volumeInfo.averageRating - a.volumeInfo.averageRating
        );
        setSelectedBook(filtered);
        setSelectedRating("");
      } else if (selectedRating === "rating_low_hi") {
        filtered = books.sort(
          (a, b) => a.volumeInfo.averageRating - b.volumeInfo.averageRating
        );
        setSelectedBook(filtered);
        setSelectedRating("");
      }
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

  const filterCategoryHandler = (filtered) => {
    setSelectedCategory(filtered.target.value);
  };

  const filterRatingHandler = (rating) => {
    setSelectedRating(rating.target.value);
  };

  const onClearHandler = () => {
    setBookName("");
    setAuthorName("");
    setYear("");
    setSelectedCategory("");
    setSelectedRating("");
  };

  const bookData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return selectedBook.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectedBook]);

  useEffect(() => {
    BooksDataService.getAllBooks().then((books) => {
      setBooks(books.items);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="my-5">
          <div
            className={`my-5 px-2 py-2 ${
              searching ? "searchResult" : "searchBar"
            }`}
          >
            <h5 className="mx-2 my-2">Search your Favorite Books</h5>
            <form onSubmit={onSubmitHandler}>
              <div className="row mt-2">
                <div className="col">
                  <input
                    type="text"
                    name="bookName"
                    placeholder="Title"
                    className="form-control"
                    value={bookName}
                    onChange={onChangeBookNameHandler}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    className="form-control"
                    value={authorName}
                    onChange={onChangeAuthorNameHandler}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    className="form-control"
                    value={year}
                    onChange={onChangeYearHandler}
                  />
                </div>
              </div>
              {searching && (
                <div className="row mt-2">
                  <div className="col">
                    <div className="category-selector">
                      <div className="category-selector__control">
                        <select
                          className="form-select"
                          value={selectedCategory}
                          onChange={filterCategoryHandler}
                          placeholder="Choose an option"
                        >
                          <option defaultValue>Category</option>
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
                  </div>
                  <div className="col">
                    <div className="sorting-selector">
                      <div className="sorting-selector__control">
                        <select
                          name="sorting"
                          className="form-select"
                          value={selectedRating}
                          onChange={filterRatingHandler}
                        >
                          <option defaultValue>Review</option>
                          <option value="reviews_hi_low">
                            Reviews: High to Low
                          </option>
                          <option value="reviews_low_hi">
                            Reviews: Low to High
                          </option>
                          <option value="rating_hi_low">
                            Rating: High to Low
                          </option>
                          <option value="rating_low_hi">
                            Rating: Low to High
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center mt-3 mb-3">
                <div className="row">
                  <div className="col">
                    <button type="submit" className="btn search">
                      Search
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="reset"
                      onClick={onClearHandler}
                      className="btn reset"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {!searching && (
            <div
              className="blur-banner"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/book.jpg)`,
              }}
            ></div>
          )}
        </div>

        <div>
          {!searching && (
            <div className="mt-4">
              <SliderImage className="mb-2" books={books} />
              {/* <SliderImage className="mb-2" /> */}
            </div>
          )}
          {!searching && (
            <div className="text-center mb-4">
              <h4 className="mt-5">Recommendation of the Week</h4>
              <div className="books mb-5">
                {books.map((book) => (
                  <BookListing
                    key={book.id}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    bookId={book.id}
                  />
                ))}
              </div>
            </div>
          )}
          {searching && (
            <div className="mt-5 mb-5">
              {bookData.map((book, index) => (
                <SearchResult
                  key={index}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  rating={book.volumeInfo.averageRating}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  date={book.volumeInfo.publishedDate}
                  category={book.volumeInfo.categories}
                  id={book.id}
                  description={book.volumeInfo.description}
                />
              ))}
              <div className="d-flex justify-content-center">
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={books.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
