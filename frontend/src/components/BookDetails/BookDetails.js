import { useState, useEffect, useReducer, useMemo } from "react";
import { Rating } from "@material-ui/lab";

import ReviewDataServices from "../../services/ReviewDataServices";

import ReviewItem from "./ReviewItem";
import EditReviewItem from "./EditReviewItem";
import Button from "./Button";
import Pagination from "../style/Pagination";

import "./BookDetails.css";

let PageSize = 8;

const BookDetails = (props) => {
  const bookInfo = {
    kind: "books#volume",
    id: "UwYJsklz7WkC",
    etag: "+CoqB4vCW38",
    selfLink: "https://www.googleapis.com/books/v1/volumes/UwYJsklz7WkC",
    volumeInfo: {
      title: "College Cooking",
      subtitle: "Feed Yourself and Your Friends [A Cookbook]",
      authors: ["Megan Carle", "Jill Carle"],
      publisher: "Ten Speed Press",
      publishedDate: "2011-02-09",
      description:
        "You have a midterm tomorrow and a fierce growl in your stomach. Your roommate just nabbed your last cup o' ramen. Do you: (A) Ignore your stomach and brew another pot of coffee? (B) Break out the PB&J? (C) Order pizza—again? (D) Make a quick trip to the grocery store? The answer's D, and College Cooking is the only study guide you'll need. Sisters Megan and Jill Carle know all about leaving a well-stocked kitchen to face an empty apartment fridge with little time to cook and very little money. They practically grew up in their parents' kitchen, but even that didn't prepare them for braving the supermarket aisles on their own. That's why they wrote COLLEGE COOKING—to share the tips and tricks they've learned while feeding themselves between late-night studying, papers, parties, and other distractions. Starting with kitchen basics, Megan and Jill first cover ingredients, equipment, and other prereqs for cooking a decent meal. They then provide more than ninety simple yet tasteworthy recipes—hearty home-style dishes, study-break snacks, healthy salads, sweet treats, and more (along with low-cal and veggie options). You'll find easy and cheap-to-make dishes, like: Tortilla Soup • Chili with Green Chile Cornbread • Chicken Salad Pita Sandwiches • Baked Penne Pasta with Italian Sausage • What's-in-the-Fridge Frittata • Peanut Butter Cup Bars • Brownie Bites You'll also find recipes for feeding a household of roommates, maximizing leftovers, cooking for a dinner date, and hosting parties with minimal prep and cost. Just consider COLLEGE COOKING your crash course in kitchen survival—and required reading for off-campus living. Reviews: “College Cooking is a must-pack, along with the fry pan and the blender, for those going back to college or starting this year.” —Arizona Republic “The recipes are quick, easy, and simple.” —Kansas City Star “This is reasonable food reasonably fast. I was going too give the cookbook to someone in college, but no way. This is going straight into my collection.” —Oakland Tribune",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781607741213",
        },
        {
          type: "ISBN_10",
          identifier: "1607741210",
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 160,
      printType: "BOOK",
      categories: ["Cooking"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.2.1.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=UwYJsklz7WkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=UwYJsklz7WkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "un",
      previewLink:
        "http://books.google.ca/books?id=UwYJsklz7WkC&printsec=frontcover&dq=cooking&hl=&cd=7&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=UwYJsklz7WkC&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=UwYJsklz7WkC",
    },
    saleInfo: {
      country: "CA",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 7.99,
        currencyCode: "CAD",
      },
      retailPrice: {
        amount: 7.99,
        currencyCode: "CAD",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=UwYJsklz7WkC&rdid=book-UwYJsklz7WkC&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 7990000,
            currencyCode: "CAD",
          },
          retailPrice: {
            amountInMicros: 7990000,
            currencyCode: "CAD",
          },
          giftable: true,
        },
      ],
    },
    accessInfo: {
      country: "CA",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.ca/books/download/College_Cooking-sample-epub.acsm?id=UwYJsklz7WkC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=UwYJsklz7WkC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "I was going too give the cookbook to someone in college, but no way. This is going straight into my collection.” —Oakland Tribune",
    },
  };

  const { reviews, editReviewHandler } = props;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  // <<<<<<< HEAD
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [currentPage, setCurrentPage] = useState(1);
  // const [reviews, setReviews] = useState([]);
  // =======
  //   const [reviews, setReviews] = useState([]);

  // >>>>>>> 5720d2c4de1b275498c88e0ddebe3de2ac5e6b77
  const categories = bookInfo.volumeInfo.categories;

  useEffect(() => {
    ReviewDataServices.getReviewsByBookId("zYw3sYFtz9kC").then((reviews) => {
      for (let i = 0; i < reviews.length; i++) {
        reviews[i].isEdit = false;
      }
      editReviewHandler(reviews);
    });
  }, []);

  const editReviewArrHandler = () => {
    editReviewHandler(reviews);
  };

  const displayCategories = (categories) => {
    let categoryArr = categories[0];
    for (let i = 1; i < categories.length; i++) {
      categories += ", " + categories[i];
    }

    return categoryArr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      rating: rating,
      comment: comment,
      userId: 30,
      bookId: "zYw3sYFtz9kC",
    };
    ReviewDataServices.addReview(newReview);
    ReviewDataServices.getReviewsByBookId("zYw3sYFtz9kC").then((reviews) => {
      editReviewArrHandler(reviews);
    });
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
    editReviewArrHandler(reviewsArr);
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
          <p className="bookInfo">Author: {bookInfo.volumeInfo.authors}</p>
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
            <Button name="Wish List" isMargin={true} isRedirect={false} />
            <Button name="Library" isMargin={true} isRedirect={false} />
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
                    />
                  );
                } else {
                  return (
                    <ReviewItem
                      key={index}
                      itemId={index}
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
