const db = require("../models");
const sequelize = db.sequelize;

module.exports.getAllReviews = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .query("SELECT * FROM review INNER JOIN usr ON review.userid=usr.userid")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.getReviewsByBookId = (bookId) => {
  return new Promise((resolve, reject) => {
    sequelize
      .query(
        `SELECT * FROM review r INNER JOIN userdetails u ON r.userid=u.userid WHERE r.bookid='${bookId}' AND isActive=true ORDER BY updatedate DESC`
      )
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.addReview = (newReview) => {
  console.log(newReview);
  return new Promise((resolve, reject) => {
    const [results, metadata] = sequelize.query(
      `INSERT INTO review (createdate, updatedate, comment, rating, userid, bookid, isactive) VALUES(CAST('${newReview.date}' AS date), CAST('${newReview.date}' AS date), '${newReview.comment}', ${newReview.rating}, ${newReview.userId}, '${newReview.bookId}', true)`
    );

    if (metadata === 1) {
      resolve({ errCode: 0, message: "Add review success" });
    } else {
      reject({ errCode: 1, message: "Add review fail" });
    }
  });
};

module.exports.deleteReview = (reviewId) => {
  return new Promise(async (resolve, reject) => {
    const results = await sequelize.query(
      `UPDATE review SET isActive=false WHERE reviewid=${reviewId}`
    );

    if (results[1].rowCount === 1) {
      resolve({ errCode: 0, message: "Delete review success" });
    } else {
      reject({ errCode: 1, message: "Delete review fail" });
    }
  });
};

module.exports.editReview = (editReview) => {
  return new Promise(async (resolve, reject) => {
    const results = await sequelize.query(
      `UPDATE review SET comment='${editReview.comment}', rating=${editReview.rating}, updatedate= CAST('${editReview.date}' AS date) WHERE reviewid=${editReview.reviewId}`
    );

    if (results[1].rowCount === 1) {
      resolve({ errCode: 0, message: "edit review success" });
    } else {
      reject({ errCode: 1, message: "edit review fail" });
    }
  });
};
