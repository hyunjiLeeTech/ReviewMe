const db = require("../models");
const sequelize = db.sequelize;

module.exports.getAllReviews = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .query("SELECT * FROM review")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.getReviewsByBookId = (bookId) => {
  const sql = `SELECT * FROM review WHERE bookid='${bookId}'`;

  return new Promise((resolve, reject) => {
    sequelize
      .query(sql)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
