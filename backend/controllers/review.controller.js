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

module.exports.AddReview = (newReview) => {
  sequelize.query(
    `INSERT INTO review (createdate, updatedate, comment, rating, userid, bookid, isactive) VALUES(CAST('${newReview.date}' AS date), CAST('${newReview.date}' AS date), '${newReview.comment}', ${newReview.rating}, ${newReview.userId}, '${newReview.bookId}', true)`
  );
};

module.exports.DeleteReview = (reviewId) => {
  return new Promise((resolve, reject) => {
    sequelize
      .query(`UPDATE review SET isActive=false WHERE reviewid=${reviewId}`)
      .then(() => {
        resolve({ errCode: 0, message: "delete success" });
      })
      .catch((err) => {
        reject({ errCode: 1, message: "delete fail" });
      });
  });
};
