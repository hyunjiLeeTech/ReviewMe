const db = require("../models");
const sequelize = db.sequelize;

module.exports.getAllReviews = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .query("SELECT * from review")
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
