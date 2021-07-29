const ReviewsController = require("../backend/controllers/review.controller");

test("Test get all reviews controller", () => {
  ReviewsController.getAllReviews()
    .then((res) => {
      return expect(res.errCode).toBe(0);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(0);
    });
});

test("Test get reviews by book id controller with correct book ID", () => {
  ReviewsController.getReviewsByBookId("UwYJsklz7WkC")
    .then((res) => {
      return expect(res.errCode).toBe(0);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(0);
    });
});

test("Test get reviews by book id controller with empty string", () => {
  ReviewsController.getReviewsByBookId("")
    .then((res) => {
      return expect(res.reviews).toBe(undefined);
    })
    .catch((res) => {
      return expect(res.reviews).toBe(undefined);
    });
});

test("Test get reviews by book id controller with wrong book ID", () => {
  ReviewsController.getReviewsByBookId("Wrong Book ID")
    .then((res) => {
      return expect(res.reviews).toBe(undefined);
    })
    .catch((res) => {
      return expect(res.reviews).toBe(undefined);
    });
});

test("Test add review controller", () => {
  ReviewsController.addReview({
    createdate: "1111-11-11",
    updatedate: "1111-11-11",
    comment: "test add review",
    rating: 0,
    userid: 0,
    bookid: "",
  })
    .then((res) => {
      return expect(res.errCode).toBe(0);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(0);
    });
});

test("Test add review controller without createdate", () => {
  ReviewsController.addReview({
    updatedate: "1111-11-11",
    comment: "test add review",
    rating: 0,
    userid: 0,
    bookid: "",
  })
    .then((res) => {
      return expect(res.errCode).toBe(undefined);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(undefined);
    });
});

test("Test add review controller without updateDate", () => {
  ReviewsController.addReview({
    createdate: "1111-11-11",
    comment: "test add review",
    rating: 0,
    userid: 0,
    bookid: "",
  })
    .then((res) => {
      return expect(res.errCode).toBe(undefined);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(undefined);
    });
});

test("Test add review controller without comment", () => {
  ReviewsController.addReview({
    createdate: "1111-11-11",
    updatedate: "1111-11-11",
    rating: 0,
    userid: 0,
    bookid: "",
  })
    .then((res) => {
      return expect(res.errCode).toBe(undefined);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(undefined);
    });
});

test("Test add review controller without rating", () => {
  ReviewsController.addReview({
    createdate: "1111-11-11",
    updatedate: "1111-11-11",
    comment: "test add review",
    userid: 0,
    bookid: "",
  })
    .then((res) => {
      return expect(res.errCode).toBe(undefined);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(undefined);
    });
});

test("Test add review controller without userid", () => {
  ReviewsController.addReview({
    createdate: "1111-11-11",
    updatedate: "1111-11-11",
    comment: "test add review",
    rating: 0,
    bookid: "",
  })
    .then((res) => {
      return expect(res.errCode).toBe(undefined);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(undefined);
    });
});

test("Test add review controller without userid", () => {
  ReviewsController.addReview({
    createdate: "1111-11-11",
    updatedate: "1111-11-11",
    comment: "test add review",
    rating: 0,
    userid: 0,
  })
    .then((res) => {
      return expect(res.errCode).toBe(undefined);
    })
    .catch((res) => {
      return expect(res.errCode).toBe(undefined);
    });
});
