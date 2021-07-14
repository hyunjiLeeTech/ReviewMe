const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const dataModule = require("./modules/serverDataModule");
const db = require("./models/");
const reviewController = require("./controllers/review.controller");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.get("/reviews", (req, res) => {
  reviewController
    .getAllReviews()
    .then((data) => {
      res.json({ reviews: data });
    })
    .catch((err) => {
      res.json({ message: "error while getting reviews" });
    });
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

db.initialize().then((res) => {
  console.log(res);
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});
