import React, { useState } from "react";
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
    category: "Cooking",
    rating: 5,
    image:
      "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "You Suck at Cooking",
    id: "5KqxDwAAQBAJ",
    author: "Clarkson Potter, You Suck at Cooking",
    date: 2019,
    category: "Cooking",
    rating: 4,
    image:
      "http://books.google.com/books/content?id=5KqxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title:
      "The Essential New York Times Cookbook: Classic Recipes for a New Century",
    id: "QWrVBAAAQBAJ",
    author: "Amanda Hesser",
    date: 2010,
    category: "Cooking",
    rating: 2,
    image:
      "http://books.google.com/books/content?id=QWrVBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Home Cooking",
    id: "TB4FEAAAQBAJ",
    author: "Laurie Colwin",
    date: 2010,
    category: "Cooking",
    rating: 1,
    image:
      "http://books.google.com/books/content?id=TB4FEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "College Cooking",
    id: "UwYJsklz7WkC",
    author: "Megan Carle, Jill Carle",
    date: 2007,
    rating: 1.5,
    category: "Detective",
    image:
      "http://books.google.com/books/content?id=UwYJsklz7WkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Mastering the Art of Soviet Cooking",
    id: "GGuODQAAQBAJ",
    author: "Anya Von Bremzen",
    date: 2014,
    category: "Cooking",
    rating: 4.5,
    image:
      "http://books.google.com/books/content?id=GGuODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Salt, Fat, Acid, Heat",
    id: "yvqxDgAAQBAJ",
    author: "Samin Nosrat",
    date: 2017,
    rating: 3.5,
    category: "Adventure",
    image:
      "http://books.google.com/books/content?id=yvqxDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Maangchi's Big Book of Korean Cooking",
    id: "ROJ-DwAAQBAJ",
    author: "Maangchi, Martha Rose Shulman",
    date: 2019,
    category: "Cooking",
    rating: 5,
    image:
      "http://books.google.com/books/content?id=ROJ-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Cooked",
    id: "be2XOQ2sB_ED",
    author: "Michael Pollan",
    date: 2013,
    category: "Cooking",
    rating: 1,
    image:
      "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "Where Cooking Begins",
    id: "A9hhDwAAQBAJ",
    author: "Carla Lalli Music",
    date: 2019,
    category: "Action",
    rating: 4,
    image:
      "http://books.google.com/books/content?id=A9hhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    title: "The Science of Cooking",
    id: "az8pDwAAQBAJ",
    author: "Stuart Farrimond",
    date: 2017,
    category: "Cooking",
    rating: 2.5,
    image:
      "http://books.google.com/books/content?id=az8pDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
];
const HomePage = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [year, setYear] = useState("");
  const [searching, setSearching] = useState(false);
  const [selectedBook, setSelectedBook] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("action");

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
      console.log(selectedCategory);
      const filteredArray = bookList.filter((entry) => {
        return entry.category.toLowerCase() === selectedCategory;
      });
      console.log(filtered);
      setSelectedBook(filteredArray);
    } else if (bookName !== "") {
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
  const filterCategoryHandler = (filtered) => {
    setSelectedCategory(filtered.target.value);
  };
  const onClearHandler = () => {
    setBookName("");
    setAuthorName("");
    setYear("");
    setSelectedCategory("");
  };
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
                        >
                          <option value disabled>
                            Choose an option
                          </option>
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
                        <select name="sorting" className="form-select">
                          <option value="reviews_hi_low">
                            Reviews: High to Low
                          </option>
                          <option value="reviews_low_hi">
                            Reviews: Low to High
                          </option>
                          <option value="rating_hi_low">
                            Rating: Hi to Low
                          </option>
                          <option value="rating_low_hi">
                            Rating: Low to Hi
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
          {!searching && <div className="blur-banner"></div>}
        </div>

        <div>
          {!searching && (
            <div className="mt-4">
              <SliderImage className="mb-2" bookList={bookList} />
            </div>
          )}
          {!searching && (
            <div className="text-center mb-4">
              <h4 className="mt-5">Recommendation of the Week</h4>
              <div className="books">
                {bookList.map((book) => (
                  <BookListing
                    key={book.id}
                    image={book.image}
                    title={book.title}
                    author={book.author}
                    bookId={book.id}
                  />
                ))}
              </div>
            </div>
          )}
          {searching && (
            <div className="mt-5 mb-5">
              {selectedBook.map((book, index) => (
                <SearchResult
                  key={index}
                  image={book.image}
                  rating={book.rating}
                  title={book.title}
                  author={book.author}
                  date={book.date}
                  category={book.category}
                  bookId={book.id}
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