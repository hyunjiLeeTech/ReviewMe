const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");
const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

//#region Reviews
app.get("/reviews", (req, res) => {
  controllers.review
    .getAllReviews()
    .then((data) => {
      res.json({ status: 1, reviews: data });
    })
    .catch((err) => {
      res.json({ status: 0, message: "error while getting reviews" });
    });
});

app.get("/reviews/:bookId", (req, res) => {
  const bookId = req.query.bookId;
  controllers.review
    .getReviewsByBookId(bookId)
    .then((data) => {
      res.json({ status: 1, reviews: data });
    })
    .catch((err) => {
      res.json({ status: 0, message: "error" });
    });
});
//#endregion

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

db.initialize()
  .then((res) => {
    console.log(res);
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
