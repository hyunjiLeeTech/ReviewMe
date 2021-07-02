import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";

import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { rating, nickname, date, review, index } = props;
  return (
    <div className="reviewItemContainer" key={index}>
      <Rating name="hover-feedback" value={rating} disabled={true} />
      <div className="row">
        <div className="col-lg-3 col-5">
          <h5 className="nickname">{nickname}</h5>
        </div>
        <div className="col-lg-2 col-4">
          <p className="date">{date}</p>
        </div>
        <div className="col-lg-1 col-1">
          <Link to="/">
            <p className="link">Edit</p>
          </Link>
        </div>
        <div className="col-lg-1 col-1">
          <Link to="/report">
            <p className="link">Report</p>
          </Link>
        </div>
      </div>

      <p>{review}</p>
    </div>
  );
};

export default ReviewItem;
