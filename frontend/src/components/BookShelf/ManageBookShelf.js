import { useState, useEffect, useMemo } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

import Title from "../style/Title";
import ManageBookItem from "./ManageBookItem";
import Pagination from "../style/Pagination";

import "./BookShelf.css";

let PageSize = 12;

const ManageBookShelf = (props) => {
  const { manageBooks, getBookshelf, title, subTitle, items } = props;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getBookshelf();
  }, []);

  const bookData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items]);

  const displayBookShelf = () => {
    return bookData.map((data, index) => (
      <ManageBookItem
        key={index}
        image={data.bookcover}
        title={data.booktitle}
        author={data.author}
        bookId={data.bookid}
        isSelected={data.isSelected}
      />
    ));
  };

  return (
    <div className="container bookShelfContainer">
      <Title name={title} />
      <h5 className="subTitle">{subTitle}</h5>
      <div className="row justify-content-end">
        <button className="col-2 col-lg-1" className="btnManage">
          <RiDeleteBin5Fill
            size={50}
            onClick={() => {
              alert("click");
            }}
          />
        </button>
        <div className="col-2 col-lg-1"></div>
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

export default ManageBookShelf;
