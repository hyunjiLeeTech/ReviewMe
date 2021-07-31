import { useState, useEffect, useMemo } from "react";
import { BsGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import Title from "../style/Title";
import BookItem from "./BookItem";
import Pagination from "../style/Pagination";

import "./BookShelf.css";

let PageSize = 12;

const BookShelf = (props) => {
  const { resetManageBoookItem, getBookshelf, title, subTitle, items } = props;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    resetManageBoookItem();
    getBookshelf();
  }, []);

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
      <div>
        <Link
          className="row justify-content-end"
          to={title === "Library" ? "/library/manage" : "/wishlist/manage"}
        >
          <button className="col-2 col-lg-1" className="btnManage">
            <BsGearFill size={50} />
          </button>
          <div className="col-2 col-lg-1"></div>
        </Link>
      </div>
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
