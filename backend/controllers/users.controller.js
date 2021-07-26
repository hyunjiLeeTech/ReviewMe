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

const signup = async (req, res, next) => {
  let gender_type;
  const {
    nickName,
    email,
    password,
    password2,
    firstName,
    lastName,
    gender,
    dob,
  } = req.body;
  if (gender === "Male") {
    gender = 1;
  } else if (gender === "Female") {
    gender = 2;
  } else if (gender === "Prefer not to say") {
    gender = 3;
  }
  try {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);
    sequelize.query(
      `insert into usr (userid, email, password, usertypeid, isactive) values((select max(userid)+1 from usr),'${email}', '${bcryptPassword}', 2, true) returning *`
    );

    sequelize.query(
      `insert into userdetails(userdetailid, firstname, lastname, nickname, dateofbirth, genderid, userid) values((select max(userdetailid)+1 from userdetails),
         '${firstName}', '${lastName}', '${nickName}','${dob}','${gender}', (select max(userid) from usr))`
    );
  } catch (err) {
    console.error(err.message);
  }
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
