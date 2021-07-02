import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Title from "../Title";
import ReportedReview from "./ReportedReview";

import "./Report.css";

const Report = () => {
  const reviewInfo = {
    nickname: "nick name",
    date: "2020-05-12",
    rating: 3,
    comment:
      "this is very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long sentence",
  };

  const options = ["Spoilers", "Hate Speech"];
  const [reportType, setReportType] = useState("Spoiler");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${reportType}`);
  };

  const handleDropdownChange = (target) => {
    setReportType(target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="container reportContainer">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-11">
          <Title name="Report Review" />
          <ReportedReview
            nickname={reviewInfo.nickname}
            date={reviewInfo.date}
            rating={reviewInfo.rating}
            comment={reviewInfo.comment}
          />
          <form onSubmit={handleSubmit}>
            <div className="subContainer">
              <div className="questionContainer">
                Why are you reporting this comment?
              </div>
              <Dropdown
                name="reportType"
                className="dropdown"
                onChange={handleDropdownChange}
                options={options}
                value={reportType}
                placeholder="Select an option"
              />
            </div>
            <div className="subContainer">
              <div className="questionContainer">Tell us more (Optional)</div>
              <textarea
                name="comment"
                value={comment}
                placeholder="You have a comment ? *"
                className="textarea"
                onChange={handleCommentChange}
              ></textarea>
            </div>
            <div className="text-center">
              <input type="submit" value="Submit" className="submitBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
