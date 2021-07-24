const db = require("../models");
const sequelize = db.sequelize;

module.exports.getAllLibraries = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .query("SELECT * FROM libraryitem")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.getAllLibraryByUserId = (userid) => {
  return new Promise((resolve, reject) => {
    sequelize
      .query(`SELECT * FROM libraryitem WHERE userid='${userid}'`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
