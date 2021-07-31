import { useState, useEffect, useMemo } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

import Title from "../style/Title";
import ManageBookItem from "./ManageBookItem";
import Pagination from "../style/Pagination";

import LibraryDataServices from "../../services/LibraryDataServices";
import WishListDataServices from "../../services/WishListDataServices";

import "./BookShelf.css";

let PageSize = 12;

const ManageBookShelf = (props) => {
  const {
    getManageBookShelf,
    manageBooks,
    getBookshelf,
    title,
    subTitle,
    items,
  } = props;
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
        getManageBookShelf={getManageBookShelf}
        type={title === "Manage Library" ? 1 : 2}
        key={index}
        itemIndex={index}
        image={data.bookcover}
        title={data.booktitle}
        author={data.author}
        bookId={data.bookid}
        isSelected={data.isSelected}
      />
    ));
  };

  const onClickDeleteIcon = () => {
    if (title === "Manage Library") {
      let bookItems = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].isSelected) {
          bookItems.push(items[i].libraryitemid);
        }
      }
      console.log(bookItems);
      LibraryDataServices.deleteLibraryItem(bookItems).then((isDeleted) => {
        getBookshelf();
      });
    } else {
    }
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
              onClickDeleteIcon();
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
