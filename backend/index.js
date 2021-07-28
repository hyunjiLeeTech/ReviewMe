const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcryptjs");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const db = require("./models");
const sequelize = db.sequelize;
const controllers = require("./controllers");
const { userInfo } = require("os");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.get("/users", (req, res) => {
  controllers.users.getUsers().then((data) => {
    console.log(data.rows.userid);
    res.json({ users: data });
  });
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    controllers.users.login(req).then(async (data) => {
      if (typeof data === "string") {
        res.json(data);
      } else {
        let user_id;
        data[0].map((dataDetails) => {
          user_id = dataDetails.userid;
        });
        console.log(user_id);
        let password1;
        data[0].map((dataDetails) => {
          password1 = dataDetails.password;
        });
        const validPassword = await bcrypt.compare(password, password1);
        console.log(validPassword);
        res.json({ users: data, password: validPassword });
      }
    });
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/auth/signup", async (req, res) => {
  // controllers.users
  //   .login(req)
  //   .then((data) => {})
  //   .catch((err) => {
  //     res.status(401).json();
  //   });
  try {
    let gender_type;
    const {
      nickName,
      email,
      password,
      password2,
      firstName,
      lastName,
      gender,
      dob,
    } = req.body;
    if (gender === "Male") {
      gender_type = 1;
    } else if (gender === "Female") {
      gender_type = 2;
    } else if (gender === "Prefer not to say") {
      gender_type = 3;
    }

    const user = await sequelize.query(
      `select userid from usr where email='${email}'`
    );
    console.log(user);
    const userNickname = await sequelize.query(
      `select nickname from userdetails where nickname='${nickName}'`
    );
    if (user[0] != "" || userNickname[0] != "") {
      res.json("User already exist");
    } else {
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);
      const newUser = await sequelize.query(
        `insert into usr (userid, email, password, usertypeid, isactive) values((select max(userid)+1 from usr),'${email}', '${bcryptPassword}', 2, true) returning *`
      );
      sequelize.query(
        `insert into userdetails(userdetailid, firstname, lastname, nickname, dateofbirth, genderid, userid) values((select max(userdetailid)+1 from userdetails),
         '${firstName}', '${lastName}', '${nickName}','${dob}','${gender_type}', (select max(userid) from usr))`
      );
      res.json("User successfully created");
    }
  } catch (err) {
    console.error(err.message);
  }
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
    date: `${
      date.getFullYear() + 1
    }-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
    comment: req.body.comment,
    rating: req.body.rating,
    userId: req.body.userId,
    bookId: req.body.bookId,
  };

  controllers.review.addReview(newReview);
});

app.put("/reviews/edit", (req, res) => {
  const date = new Date();

  const editReview = {
    date: `${
      date.getFullYear() + 1
    }-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
    comment: req.body.comment,
    rating: req.body.rating,
    reviewId: req.body.reviewId,
  };
  console.log(editReview);
  controllers.review.editReview(editReview);
});

app.put("/reviews/delete", (req, res) => {
  const reviewId = req.body.reviewId;
  controllers.review
    .deleteReview(reviewId)
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

app.delete("/library/delete", (req, res) => {
  const id = req.body.libraryId;

  controllers.library
    .deleteLibraryItemById(id)
    .then((res) => {
      res.json({ errCode: 0, message: res });
    })
    .catch((err) => {
      res.json({ errCode: 1, message: err });
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
    });
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
    });
});

app.put("/profile/edit/:userId", (req, res) => {
  const userId = req.params.userId;
  const newData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    nickname: req.body.nickname,
  };
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
