import { useState, useMemo } from "react";
import Title from "../style/Title";
import BookItem from "./BookItem";
import Pagination from "../style/Pagination";

import "./BookShelf.css";

let PageSize = 12;

const BookShelf = (props) => {
  const { title, subTitle, items } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const bookData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items]);

  const displayBookShelf = () => {
    return bookData.map((data, index) => (
      <BookItem
        key={index}
        image={data.bookcover}
        title={data.booktitle}
        author={data.author}
        bookId={data.bookid}
      />
    ));
  };

  return (
    <div className="container bookShelfContainer">
      <Title name={title} />
      <h5 className="subTitle">{subTitle}</h5>
      <div className="row justify-content-first bookItemcontainer">
        {displayBookShelf()}
        <div className="d-flex justify-content-center">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={items.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
