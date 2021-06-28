import { Rating } from "@material-ui/lab";

import "./ReportedReview.css";

const ReportedReview = (props) => {
  const { nickname, date, rating, comment } = props;
  return (
    <div className="reviewContainer">
      <div className="row">
        <div className="col-2">
          <h5>{nickname}</h5>
        </div>
        <div className="col-2">{date}</div>
        <div className="col">
          <Rating name="rating" value={rating} />
        </div>
      </div>
      {comment}
    </div>
  );
};

export default ReportedReview;
