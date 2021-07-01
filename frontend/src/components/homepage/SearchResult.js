import React from "react";
import "./SearchResult.css";

const SearchResult = (props) => {
  console.log(props.image);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={props.image}
            className="img-fluid rounded-start"
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
              <span className="col-8 d-flex">
                <span className="fw-bold">Category</span>: {props.category}
              </span>
              <span className="col-4">
                <span className="fw-bold">Rating</span>: {props.date}
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
    </div>
  );
};

export default SearchResult;
