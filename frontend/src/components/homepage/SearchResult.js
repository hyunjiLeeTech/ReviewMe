import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

import "./SearchResult.css";

const SearchResult = (props) => {
  console.log(props.image);
  const url = "/details/" + props.bookId;
  return (
    <div className="card mb-3 mx-3 px-3 py-3">
      <Link to={url} className="bookLink">
        <div className="row g-0">
          <div className="col-md-3 tex-center mt-4 mb-4">
            <img
              src={props.image}
              className="img-thumbnail mx-auto d-block"
              alt="..."
            />
          </div>
          <div className="col-md ">
            <h4 className="book-title mt-4 fw-bold">{props.title}</h4>
            <span className="row justify-content-around">
              <span className="col-8 d-flex">
                <span className="fw-bold">Author</span>: {props.author}
              </span>
              <span className="col-4">
                <span className="fw-bold">Published</span>: {props.date}
              </span>
            </span>
            <span className="row justify-content-around">
              <span className="col-7 d-flex">
                <span className="fw-bold">Category</span>: {props.category}
              </span>
              <span className="col-5">
                <Rating
                  className="stars"
                  name="hover-feedback"
                  value={props.rating}
                  disabled={true}
                />
              </span>
            </span>
            <h5 className="mt-2">Description</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchResult;
