import React from "react";
import { Link } from "react-router-dom";

import "./BookListing.css";

const BookListing = (props) => {
  console.log(props.bookId);
  const url = "/details/" + props.bookId;
  return (
    <div className="bookContainer">
      <Link to={url}>
        <img src={props.image} alt="" />
      </Link>
      <Link to={url} className="bookLink">
        <h3>{props.title}</h3>
        <p className="author"> by {props.author}</p>
      </Link>
    </div>
  );
};

export default BookListing;
