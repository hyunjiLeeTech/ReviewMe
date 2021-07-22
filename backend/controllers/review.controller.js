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
  return new Promise((resolve, reject) => {
    const id = bookId;
    sequelize
      .query(`SELECT * FROM review WHERE bookid=${id}`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
