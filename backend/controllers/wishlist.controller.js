const db = require("../models");
const sequelize = db.sequelize;

module.exports.getAllWishList = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .query("SELECT * FROM wishlist")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.getWishListByUserId = (userid) => {
  return new Promise((resolve, reject) => {
    sequelize
      .query(`SELECT * FROM wishlist WHERE userid='${userid}'`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.deleteWishListById = (id) => {
  return new Promise((resolve, reject) => {
    sequelize
      .query(`DELETE * FROM wishlist WHERE wishlistid='${id}'`)
      .then(() => {
        resolve("Delete success");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
