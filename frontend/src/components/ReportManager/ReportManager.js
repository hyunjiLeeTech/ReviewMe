import React from "react";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import SpeakerNotesOffOutlinedIcon from "@material-ui/icons/SpeakerNotesOffOutlined";

import ReportComment from "./ReportComment";
import Title from "../style/Title";

import "./ReportManager.css";

const ReportManager = (props) => {
  const commentList = [
    {
      reporterName: "Jhon Doe",
      reporterComment: "This book sucks",
      reviewerName: "Jane Doe",
      reviewerComment: "Thi contains something bad",
      type: "hate speech",
    },
    {
      reporterName: "Jhon Doe",
      reporterComment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolormagna aliqua. Ut enim ad minim veniam, quis nostruexercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollitsanim id est laborum.",
      reviewerName: "Jane Doe",
      reviewerComment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolormagna aliqua. Ut enim ad minim veniam, quis nostruexercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollitsanim id est laborum.",
      type: "spoiler",
    },
    {
      reporterName: "Jhon Doe2",
      reporterComment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolormagna aliqua. Ut enim ad minim veniam, quis nostruexercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollitsanim id est laborum.",
      reviewerName: "Jane Doe3",
      reviewerComment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolormagna aliqua. Ut enim ad minim veniam, quis nostruexercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollitsanim id est laborum.",
      type: "spoiler",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          id="side-navigation"
          className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark"
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item mt-2">
                <a href="#spoiler" className="nav-link align-middle px-0">
                  <AnnouncementOutlinedIcon />
                  <span className="ms-1 d-none d-sm-inline">Spoiler</span>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a href="#hateSpeech" className="nav-link px-0 align-middle">
                  <SpeakerNotesOffOutlinedIcon />
                  <span className="ms-1 d-none d-sm-inline">Hate Speech</span>
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col py-3">
          <div className="text-center mt-3">
            <Title name="Reports" />
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div id="spoiler" className="cards">
                {commentList
                  .filter((item) => {
                    return item.type === "spoiler";
                  })
                  .map((data, index) => (
                    <ReportComment
                      key={index.toString()}
                      reporterName={data.reporterName}
                      reporterComment={data.reporterComment}
                      reviewerName={data.reviewerName}
                      reviewerComment={data.reporterComment}
                    />
                  ))}
              </div>
              <div id="hateSpeech" className="cards">
                {commentList
                  .filter((item) => {
                    return item.type === "hate speech";
                  })
                  .map((data, index) => (
                    <ReportComment
                      key={index.toString()}
                      reporterName={data.reporterName}
                      reporterComment={data.reporterComment}
                      reviewerName={data.reviewerName}
                      reviewerComment={data.reporterComment}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportManager;
