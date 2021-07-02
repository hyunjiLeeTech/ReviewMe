import { useState } from "react";
import { Rating } from "@material-ui/lab";

import ReviewItem from "./ReviewItem";
import Button from "./Button";

import "./BookDetails.css";

const BookDetails = () => {
  const reviewArr = [
    {
      rating: 3,
      nickname: "test nick1",
      date: "2020-04-30",
      review:
        "this is first review this is very long long long long long long long long long long long long long long long long long long long sentence",
    },

    {
      rating: 5,
      nickname: "nick nick 2",
      date: "2020-05-3",
      review: "this is second review",
    },

    {
      rating: 2,
      nickname: "kelly smith",
      date: "2020-06-10",
      review: "this is thire review",
    },

    {
      rating: 1.5,
      nickname: "samuel han",
      date: "2020-07-20",
      review: "this is fourth review",
    },
  ];

  const bookInfo = {
    kind: "books#volume",
    id: "be2XOQ2sB_EC",
    etag: "q9WZVe7sg6s",
    selfLink: "https://www.googleapis.com/books/v1/volumes/be2XOQ2sB_EC",
    volumeInfo: {
      title: "Cooked",
      subtitle: "A Natural History of Transformation",
      authors: ["Michael Pollan"],
      publisher: "Penguin UK",
      publishedDate: "2013-04-23",
      description:
        "THE INSPIRATION FOR THE NEW NETFLIX SERIES 'It's not often that a life-changing book falls into one's lap ... Yet Michael Pollan's Cooked is one of them.' SundayTelegraph 'This is a love song to old, slow kitchen skills at their delicious best' Kathryn Huges, GUARDIAN BOOKS OF THE YEAR The New York Times Top Five Bestseller - Michael Pollan's uniquely enjoyable quest to understand the transformative magic of cooking Michael Pollan's Cooked takes us back to basics and first principles: cooking with fire, with water, with air and with earth. Meeting cooks from all over the world, who share their wisdom and stories, Pollan shows how cooking is at the heart of our culture and that when it gets down to it, it also fundamentally shapes our lives. Filled with fascinating facts and curious, mouthwatering tales from cast of eccentrics, Cooked explores the deepest mysteries of how and why we cook.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9780141975634",
        },
        {
          type: "ISBN_10",
          identifier: "0141975636",
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 480,
      printType: "BOOK",
      categories: ["Technology & Engineering"],
      averageRating: 4,
      ratingsCount: 29,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.13.14.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.ca/books?id=be2XOQ2sB_EC&printsec=frontcover&dq=cooking&hl=&cd=1&source=gbs_api",
      infoLink:
        "http://books.google.ca/books?id=be2XOQ2sB_EC&dq=cooking&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Cooked.html?hl=&id=be2XOQ2sB_EC",
    },
    saleInfo: {
      country: "CA",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
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
          "http://books.google.ca/books/download/Cooked-sample-epub.acsm?id=be2XOQ2sB_EC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=be2XOQ2sB_EC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "&#39; SundayTelegraph &#39;This is a love song to old, slow kitchen skills at their delicious best&#39; Kathryn Huges, GUARDIAN BOOKS OF THE YEAR The New York Times Top Five Bestseller - Michael Pollan&#39;s uniquely enjoyable quest to understand the ...",
    },
  };

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const categories = bookInfo.volumeInfo.categories;

  const displayCategories = (categories) => {
    let categoryArr = categories[0];
    for (let i = 1; i < categories.length; i++) {
      categories += ", " + categories[i];
    }

    return categoryArr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

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
            <Button name="Wish List" isMargin={true} />
            <Button name="Library" isMargin={true} />
            <Button name="Rent / Borrow" isMargin={true} />
            <Button name="Preview" isMargin={false} />
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
                <input type="submit" value="submit" className="submitBtn" />
              </div>
            </form>

            <div className="subContainer">
              {reviewArr.map((data, index) => (
                <ReviewItem
                  key={index}
                  rating={data.rating}
                  nickname={data.nickname}
                  date={data.date}
                  review={data.review}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center"></div>
    </div>
  );
};

export default BookDetails;
