import React from "react";

const ReportComment = (props) => {
  const { reporterName, reporterComment, reviewerName, reviewerComment } =
    props;
  return (
    <div>
      <div className="comments-box p-3 mt-3">
        <div className="reporter-comment">
          <div className="d-flex justify-content-between align-items-center">
            {" "}
            <span className="text-muted">{reporterName}</span>{" "}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>{reporterComment}</p>
          </div>
        </div>
        <div className="mt-2">
          <h6>{reviewerName}</h6>
          <p>{reviewerComment}</p>
        </div>
        <div className="row text-center">
          <div className="col">
            <button className="btn delete mx-4" type="button">
              Delete
            </button>
          </div>
          <div className="col">
            <button className="btn keep  mx-4" type="button">
              Keep
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportComment;
