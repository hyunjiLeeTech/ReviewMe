import React, { useState } from "react";
import BookListing from "./BookListing";
import SliderImage from "./SliderImage";

import "./HomePage.css";

const HomePage = () => {
  const [text, setText] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = (evt) => setText(evt.target.value);

  return (
    <>
      <SliderImage />
      <div className="grid">
        <div>
          <form onSubmit={onSubmit} className="bg-gray-200 p-5">
            <input
              type="text"
              name="text"
              placeholder="search users..."
              value={text}
              onChange={onChange}
              className="bg-white p-2 w-3/4 outline-none"
            />
            <button
              type="submit"
              className="p-2 text-center text-blue-500 w-1/4 bg-white border-l"
            >
              Search
            </button>
          </form>
        </div>

        <div>
          <BookListing />
        </div>
      </div>
    </>
  );
};

export default HomePage;
