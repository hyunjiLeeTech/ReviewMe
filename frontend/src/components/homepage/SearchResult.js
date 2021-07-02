import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

import "./SearchResult.css";

const SearchResult = (props) => {
  console.log(props.image);
  const url = "/details/" + props.bookId;
  return (
    <div className="card mb-3">
      <Link to={url} className="bookLink">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={props.image}
              className="img-thumbnail mx-auto d-block"
              alt="..."
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h4 className="card-title d-flex justify-content-center fw-bold">
                {props.title}
              </h4>
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
                    name="hover-feedback"
                    value={props.rating}
                    disabled={true}
                  />
                </span>
              </span>
              <p className="card-text">
                <h5>Description</h5>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchResult;
