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

module.exports.deleteLibraryItemById = (id) => {
  return new Promise((resolve, reject) => {
    sequelize
      .query(`DELETE * FROM libraryitem WHERE libraryitemid='${id}'`)
      .then(() => {
        resolve("Delete library item success");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
