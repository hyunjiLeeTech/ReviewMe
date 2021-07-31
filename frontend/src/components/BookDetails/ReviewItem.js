import ReviewDataServices from "../../services/ReviewDataServices";

import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";

import "./ReviewItem.css";

const ReviewItem = (props) => {
  const {
    loginUserId,
    reviewUserId,
    id,
    rating,
    nickname,
    date,
    review,
    index,
    itemId,
    onClickEdit,
    refreshReviews,
  } = props;

  const onClickDelete = () => {
    ReviewDataServices.deleteReview(id).then((isDeleted) => {
      console.log(isDeleted);
      if (isDeleted) {
        console.log("refresh");
        refreshReviews();
      }
    });
  };

  const onClickEditReview = () => {
    onClickEdit(itemId);
  };

  const checkUserId = () => {
    if (loginUserId === reviewUserId) {
      return (
        <>
          <div className="col-lg-1 col-1">
            <button className="link" onClick={onClickEditReview}>
              Edit
            </button>
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
