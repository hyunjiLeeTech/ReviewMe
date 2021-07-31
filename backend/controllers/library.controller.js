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

module.exports.AddLibraryItem = async (newItem) => {
  return new Promise(async (resolve, reject) => {
    const [libraryItem, metadata] = await sequelize.query(
      `INSERT INTO libraryitem(userid, booktitle, bookcover, bookid, author)  VALUES(${newItem.userId}, '${newItem.bookTitle}', '${newItem.bookcover}', '${newItem.bookId}', '${newItem.author}')`
    );

    if (metadata === 1) {
      resolve({ errCode: 0, message: "Add Library item success" });
    } else {
      reject({ errCode: 1, message: "Add Library item fail" });
    }
  });
};
