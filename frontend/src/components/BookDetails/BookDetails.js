import { useState, useEffect, useMemo, useReducer } from "react";
import { Rating } from "@material-ui/lab";

import ReviewDataServices from "../../services/ReviewDataServices";

import Button from "./Button";
import ReviewItem from "./ReviewItem";
import EditReviewItem from "./EditReviewItem";
import Pagination from "../style/Pagination";
import "./BookDetails.css";

const PageSize = 8;

const BookDetails = (props) => {
  const {
    userType,
    userId,
    bookInfo,
    reviews,
    setReviewsHandler,
    refreshReviews,
    wishlist,
    library,
  } = props;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [currentPage, setCurrentPage] = useState(1);
  const categories = bookInfo.volumeInfo.categories;

  const getAuthor = () => {
    const authors = bookInfo.volumeInfo.authors;
    let authorsArr = "";

    if (typeof authors !== "undefined") {
      authorsArr = authors[0];

      for (let i = 1; i < authors.length; i++) {
        authorsArr += `, ${authors[i]}`;
      }
    }

    return authorsArr;
  };

  const addBookShelfInfo = {
    userId: userId,
    bookTitle: bookInfo.volumeInfo.title,
    bookcover: bookInfo.volumeInfo.imageLinks.thumbnail,
    bookId: bookInfo.id,
    author: getAuthor(),
  };

  const displayCategories = (categories) => {
    let categoryArr = "";
    if (categories.length > 0) {
      categoryArr = categories[0];
      for (let i = 1; i < categories.length; i++) {
        categoryArr += ", " + categories[i];
      }
    }

    return categoryArr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType !== 2) {
      alert("Please log in first");
    } else {
      const newReview = {
        rating: rating,
        comment: comment,
        userId: userId,
        bookId: "zYw3sYFtz9kC",
      };
      ReviewDataServices.addReview(newReview);
      refreshReviews();
    }
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const onClickEdit = (id) => {
    let reviewsArr = reviews;
    reviewsArr[id].isEdit = !reviewsArr[id].isEdit;
    setReviewsHandler(reviewsArr);
    forceUpdate();
  };

  const reviewData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return reviews.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, reviews]);

  return (
    <div className="container detailContainer">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-6">
          <h1>{bookInfo.volumeInfo.title}</h1>
          <p className="bookInfo">Author: {getAuthor()}</p>
          <p className="bookInfo">
            Published date: {bookInfo.volumeInfo.publishedDate}
          </p>
          <p className="bookInfo">
            Publisher: {bookInfo.volumeInfo.publisher}{" "}
          </p>
          <p className="bookInfo">Category: {displayCategories(categories)}</p>
          <p className="bookInfo">
            ISBN: {bookInfo.volumeInfo.industryIdentifiers[0].identifier}
          </p>
        </div>
        <div className="col-lg-4 col-5 imageContainer">
          <img
            className="bookImage"
            src={bookInfo.volumeInfo.imageLinks.thumbnail}
            alt={bookInfo.volumeInfo.title}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-9 col-11 ">
          <div className="buttonContainer">
            <Button
              addBookShelfInfo={addBookShelfInfo}
              bookshelf={wishlist}
              name="Wish List"
              isMargin={true}
              isRedirect={false}
            />
            <Button
              addBookShelfInfo={addBookShelfInfo}
              name="Library"
              bookshelf={library}
              isMargin={true}
              isRedirect={false}
            />
            <Button
              name="Rent / Borrow"
              isMargin={true}
              isRedirect={true}
              link={bookInfo.saleInfo.buyLink}
            />
            <Button
              name="Preview"
              isMargin={false}
              isRedirect={true}
              link={bookInfo.volumeInfo.previewLink}
            />
          </div>
          <div className="subContainer">
            <h3>Description</h3>
            <p>{bookInfo.volumeInfo.description}</p>
          </div>
          <div className="subContainer">
            <h3>Reviews</h3>
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
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
              <div className="commentBtn">
                <input type="submit" value="Submit" className="btn submit" />
              </div>
            </form>

            <div className="subContainer">
              {reviewData.map((data, index) => {
                if (data.isEdit) {
                  return (
                    <EditReviewItem
                      key={index}
                      reviewId={data.reviewid}
                      itemId={index}
                      rating={data.rating}
                      comment={data.comment}
                      onClickEdit={onClickEdit}
                      refreshReviews={refreshReviews}
                    />
                  );
                } else {
                  return (
                    <ReviewItem
                      key={index}
                      itemId={index}
                      loginUserId={userId}
                      reviewUserId={data.userid}
                      id={data.reviewid}
                      rating={data.rating}
                      nickname={data.nickname}
                      date={data.updatedate}
                      review={data.comment}
                      onClickEdit={onClickEdit}
                    />
                  );
                }
              })}
              <div className="d-flex justify-content-center">
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={reviews.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
