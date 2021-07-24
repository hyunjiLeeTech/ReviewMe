import ReviewDataServices from "../../services/ReviewDataServices";

import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";

import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { id, rating, nickname, date, review, index } = props;
  const loginUserId = 0;

  const onClickDelete = () => {
    ReviewDataServices.deleteReview(id);
  };

  const checkUserId = () => {
    if (loginUserId !== 999) {
      return (
        <>
          <div className="col-lg-1 col-1">
            <button className="link">Edit</button>
          </div>
          <div className="col-lg-1 col-1">
            <button className="link" onClick={onClickDelete}>
              Delete
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div className="col-lg-1 col-1">
          <Link to="/report">
            <p className="link">Report</p>
          </Link>
        </div>
      );
    }
  };

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
        {checkUserId()}
      </div>

      <p>{review}</p>
    </div>
  );
};

export default ReviewItem;
