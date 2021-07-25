import { useState } from "react";
import { Rating } from "@material-ui/lab";

const EditReviewItem = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [comment, setComment] = useState("");
  const { id, nickname, date, review, index } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      rating: rating,
      comment: comment,
      userId: 30,
      bookId: "zYw3sYFtz9kC",
    };
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Rating
        onClick={handleRatingChange}
        name="rating"
        value={rating}
        precision={0.5}
      />
      <textarea
        placeholder="You have a comment ? *"
        className="textarea"
        name="comment"
        value={review}
        onChange={handleCommentChange}
      ></textarea>
      <div className="commentBtn">
        <input type="submit" value="Submit" className="btn submit" />
      </div>
    </form>
  );
};

export default EditReviewItem;
