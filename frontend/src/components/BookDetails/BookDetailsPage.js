import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BooksDataService from "../../services/BooksDataService";
import ReviewDataServices from "../../services/ReviewDataServices";

import BookDetails from "./BookDetails";

const BookDetailsPage = (props) => {
  const { userType, userId, library, wishlist, getWishlist, getLibrary } =
    props;
  const { id } = useParams();
  const [book, setBook] = useState();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    BooksDataService.getBooksByID(id).then((book) => {
      setBook(book);

      refreshReviews();
    });
  }, []);

  const setReviewsHandler = (reviewsArr) => {
    setReviews(reviewsArr);
  };

  const refreshReviews = () => {
    ReviewDataServices.getReviewsByBookId(id).then((reviewsArr) => {
      for (let i = 0; i < reviewsArr.length; i++) {
        reviewsArr[i].isEdit = false;
      }

      setReviews(reviewsArr);
      setIsLoading(false);
    });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <BookDetails
          getWishlist={getWishlist}
          getLibrary={getLibrary}
          wishlist={wishlist}
          library={library}
          userType={userType}
          userId={userId}
          bookInfo={book}
          reviews={reviews}
          refreshReviews={refreshReviews}
          setReviewsHandler={setReviewsHandler}
        />
      )}
    </div>
  );
};

export default BookDetailsPage;
