const db = require("../models");
const sequelize = db.sequelize;
const bcrypt = require("bcryptjs");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .query("SELECT * from usr")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const login = async (req, res, next) => {
  return new Promise((resolve, reject) => {
    const { email, password } = req.body;
    sequelize
      .query(`SELECT * from usr where email='${email}'`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.getUsers = getUsers;
exports.login = login;
