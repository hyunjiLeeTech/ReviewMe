import React from "react";

const SearchResult = (props) => {
  console.log(props.image);
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img src={props.image} className="card-img" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <span>
              <h5 className="card-title">
                {props.title} {""}
                {props.author}
              </h5>
              <p></p>
            </span>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
