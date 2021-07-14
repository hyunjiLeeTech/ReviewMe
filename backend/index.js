const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const dataModule = require("./modules/serverDataModule");
const db = require("./models/");
const { resolve } = require("path");
const { rejects } = require("assert");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

db.initialize().then((res) => {
  db.getAllReviews()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(res);
  // app.listen(PORT, () => {
  //   console.log(`Server listening on ${PORT}`);
  // });
});
