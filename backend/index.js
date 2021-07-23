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

app.get("/reviews", (req, res) => {
  controllers.review
    .getAllReviews()
    .then((data) => {
      res.json({ reviews: data });
    })
    .catch((err) => {
      res.json({ message: "error while getting reviews" });
    });
});

//#region Library
app.get("/library", (req, res) => {
  controllers.library
    .getAllLibraries()
    .then((data) => {
      res.json({ errCode: 0, libraries: data });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "error while getting library" });
    });
});

app.get("/library/:userId", (req, res) => {
  const userId = req.params.userId;
  controllers.library
    .getAllLibraryByUserId(userId)
    .then((data) => {
      res.json({ errCode: 0, libraries: data });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "error while getting library" });
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
