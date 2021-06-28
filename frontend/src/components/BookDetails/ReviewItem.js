import { Rating } from "@material-ui/lab";

import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { rating, nickname, date, review } = props;
  return (
    <div className="reviewItemContainer">
      <Rating name="hover-feedback" value={rating} disabled={true} />
      <div className="row">
        <div className="col-2">
          <h5>{nickname}</h5>
        </div>
        <div className="col-2">
          <p>{date}</p>
        </div>
        <div className="col-1">
          <button className="reviewBtn">Edit</button>
        </div>
        <div className="col-1">
          <button className="reviewBtn">Report</button>
        </div>
      </div>

      <p>{review}</p>
    </div>
  );
};

export default ReviewItem;
