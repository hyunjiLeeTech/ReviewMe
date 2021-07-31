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

const login = (email) => {
  return new Promise((resolve, reject) => {
    //const { email, password } = req.body;
    sequelize
      .query(`SELECT * from usr where email='${email}'`)
      .then((data) => {
        console.log(data);
        if (data[0] == "") {
          resolve(" User doesn't exist! Please enter correct information");
        } else {
          resolve(data);
        }
      })
      .catch(() => {
        reject({ errCode: 1 });
      });
  });
};
const signup = (info) => {};
exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
