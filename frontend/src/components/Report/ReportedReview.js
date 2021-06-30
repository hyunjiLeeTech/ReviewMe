import { Rating } from "@material-ui/lab";

import "./ReportedReview.css";

const ReportedReview = (props) => {
  const { nickname, date, rating, comment } = props;
  return (
    <div className="reviewContainer">
      <div className="row">
        <div className="col-lg-4 col-6">
          <h5>{nickname}</h5>
        </div>
        <div className="col-lg-2 col-5">{date}</div>
        <div className="col-lg-2 col-11">
          <Rating name="rating" value={rating} />
        </div>
      </div>
      {comment}
    </div>
  );
};

export default ReportedReview;
