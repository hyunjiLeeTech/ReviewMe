const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");
const controllers = require("./controllers");
const controller = require("./controllers");
const { userInfo } = require("os");

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
      res.json({ errCode: 0, reviews: data });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "error while getting reviews" });
    });
});

app.get("/reviews/:bookId", (req, res) => {
  const bookId = req.params.bookId;

  controllers.review
    .getReviewsByBookId(bookId)
    .then((data) => {
      res.json({ errCode: 0, reviews: data });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: err });
    });
});

app.post("/reviews/add", (req, res) => {
  const date = new Date();

  const newReview = {
    date: `${date.getFullYear() + 1
      }-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
    comment: req.body.comment,
    rating: req.body.rating,
    userId: req.body.userId,
    bookId: req.body.bookId
  };

  controllers.review.AddReview(newReview);
});

app.put("/reviews/delete", (req, res) => {
  const reviewId = req.body.reviewId;
  controllers.review
    .DeleteReview(reviewId)
    .then((res) => {
      res.json({ errCode: 0, message: "delete review success" });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "delete review fail" });
    });
});
//#endregion

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

//#region Wish List
app.get("/wishlist", (req, res) => {
  controllers.wishlist
    .getAllWishList()
    .then((data) => {
      res.json({ errCode: 0, wishlist: data });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "error while getting wishlist" });
    });
});

app.get("/wishlist/:userId", (req, res) => {
  const userId = req.params.userId;
  controllers.wishlist
    .getWishListByUserId(userId)
    .then((data) => {
      res.json({ errCode: 0, wishlist: data });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "error while getting wishlist" });
    });
});
//#endregion

//#region Profile
app.get("/profile", (req, res) => {
  controllers.profile
    .getAllProfiles()
    .then((data) => {
      res.json({ errCode: 0, profile: data });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "error while getting profile" });
    })
});

app.get("/profile/:userId", (req, res) => {
  const userId = req.params.userId;
  controllers.profile
    .getProfileByUserId(userId)
    .then((data) => {
      res.json({ errCode: 0, profile: data });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "error while getting profile" });
    })
});

app.put("/profile/edit/:userId", (req, res) => {
  const userId = req.params.userId;
  const newData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    nickname: req.body.nickname
  }
  controllers.profile.editProfile(newData, userId);
});

app.put("/profile/delete", (req, res) => {
  const userId = req.body.userId;
  controllers.profile
    .deleteAccountProfile(userId)
    .then((res) => {
      res.json({ errCode: 0, message: "account deletion successful" });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: "account deletion failed" });
    });
});

app.delete("/wishlist/delete", (req, res) => {
  const id = req.body.wishlistId;

  controllers.wishlist
    .deleteWishListById(id)
    .then((res) => {
      res.json({ errCode: 0, message: res });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: err });
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
