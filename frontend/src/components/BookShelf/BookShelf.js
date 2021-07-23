import { useState, useEffect } from "react";

import LibraryDataServices from "../../services/LibraryDataServices";

import Title from "../style/Title";
import BookItem from "./BookItem";

import "./BookShelf.css";

const BookShelf = (props) => {
  const { title, subTitle } = props;
  const [libraryList, setLibraryList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (title === "Library") {
      LibraryDataServices.getLibraryByUseId(30).then((library) => {
        setLibraryList(library);
        setIsLoading(false);
      });
    }
  }, []);

  const displayBookShelf = () => {
    if (isLoading) {
      return <p>loading</p>;
    } else {
      if (title === "Library") {
        return libraryList.map((data, index) => (
          <BookItem
            key={index}
            image={data.bookcover}
            title={data.booktitle}
            author={data.author}
            bookId={data.bookid}
          />
        ));
      } else {
        return wishList.map((data, index) => (
          <BookItem
            key={index}
            image={data.bookcover}
            title={data.booktitle}
            author={data.author}
            bookId={data.bookid}
          />
        ));
      }
    }
  };

  return (
    <div className="container bookShelfContainer">
      <Title name={title} />
      <h5 className="subTitle">{subTitle}</h5>
      <div className="row justify-content-first bookItemcontainer">
        {displayBookShelf()}
      </div>
    </div>
  );
};

export default BookShelf;
