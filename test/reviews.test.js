const ReviewsController = require("../backend/controllers/review.controller");

test("Test get all reviews controller", () => {
  return ReviewsController.getAllReviews()
    .then((res) => {
      expect(res.errCode).toBe(0);
    })
    .catch((res) => {
      expect(res.errCode).toBe(0);
    });
});

test("Test get reviews by book id controller with correct book ID", () => {
  return ReviewsController.getReviewsByBookId("UwYJsklz7WkC")
    .then((res) => {
      expect(res.errCode).toBe(0);
    })
    .catch((res) => {
      expect(res.errCode).toBe(0);
    });
});

test("Test get reviews by book id controller with empty string", () => {
  return ReviewsController.getReviewsByBookId("")
    .then((res) => {
      expect(res.reviews).toBe(undefined);
    })
    .catch((res) => {
      expect(res.reviews).toBe(undefined);
    });
});

test("Test get reviews by book id controller with wrong book ID", () => {
  return ReviewsController.getReviewsByBookId("Wrong Book ID")
    .then((res) => {
      expect(res.reviews).toBe(undefined);
    })
    .catch((res) => {
      expect(res.reviews).toBe(undefined);
    });
});

test("Test add review controller", () => {
  ReviewsController.addReview({
    date: "1111-11-11",
    comment: "test add review",
    rating: 0,
    userId: 1,
    bookId: "",
  })
    .then((res) => {
      return expect(res.errCode).toBe(0);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(0);
    });
});

test("Test add review controller without createdate", () => {
  return ReviewsController.addReview({
    comment: "test add review",
    rating: 0,
    userId: 0,
    bookId: "",
  })
    .then((res) => {
      expect(res.errCode).toBe(1);
    })
    .catch((res) => {
      expect(res.errCode).toBe(1);
    });
});

test("Test add review controller without comment", () => {
  return ReviewsController.addReview({
    date: "1111-11-11",
    rating: 0,
    userId: 1,
    bookId: "",
  })
    .then((res) => {
      expect(res.errCode).toBe(1);
    })
    .catch((res) => {
      expect(res.errCode).toBe(1);
    });
});

test("Test add review controller without rating", () => {
  return ReviewsController.addReview({
    date: "1111-11-11",
    comment: "test add review",
    userId: 1,
    bookId: "",
  })
    .then((res) => {
      expect(res.errCode).toBe(1);
    })
    .catch((res) => {
      expect(res.errCode).toBe(1);
    });
});

test("Test add review controller without userid", () => {
  ReviewsController.addReview({
    date: "1111-11-11",
    comment: "test add review",
    rating: 0,
    bookId: "",
  })
    .then((res) => {
      return expect(res.errCode).toBe(1);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(1);
    });
});

test("Test add review controller without bookId", () => {
  ReviewsController.addReview({
    date: "1111-11-11",
    comment: "test add review",
    rating: 0,
    userId: 1,
  })
    .then((res) => {
      return expect(res.errCode).toBe(1);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(1);
    });
});
