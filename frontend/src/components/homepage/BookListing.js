import React from "react";

import "./BookListing.css";

const BookListing = (props) => {
  return (
    <div className="booksSection">
      <h4>Recommendation of the Week</h4>
      <div className="books">
        {props.bookList.map((post) => (
          <div className="bookContainer">
            <img src={post.image} alt="" />
            <h3>{post.title}</h3>
            <p className="author"> by {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookListing;
