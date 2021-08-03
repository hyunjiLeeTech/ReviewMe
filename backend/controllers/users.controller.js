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
const signup = (email, nickname) => {
  return new Promise(async (resolve, reject) => {
    const user = await sequelize.query(
      `SELECT * from usr where email='${email}'`
    );
    console.log(user);
    if (user[0] != "") {
      resolve(" User already exist!");
    } else if (user[0] == "") {
      const nickName = await sequelize.query(
        `select nickname from userdetails where nickname='${nickname}'`
      );
      if (nickName[0] != "") {
        resolve("Entered nickname already taked. Please enter another!");
      }
    } else {
      reject({ errCode: 1 });
    }
  });
};
exports.getUsers = getUsers;
exports.login = login;
