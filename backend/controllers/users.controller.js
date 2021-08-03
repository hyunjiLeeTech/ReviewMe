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

const signup = (userInfo) => {
  return new Promise(async (resolve, reject) => {
    let gender_type;
    const nickName = userInfo.nickName;
    const email = userInfo.email;
    const password = userInfo.password;
    const firstName = userInfo.firstName;
    const lastName = userInfo.lastName;
    const gender = userInfo.gender;
    const dob = userInfo.dob;

    if (gender === "Male") {
      gender_type = 1;
    } else if (gender === "Female") {
      gender_type = 2;
    } else if (gender === "Prefer not to say") {
      gender_type = 3;
    }

    const [user, usrMetadata] = await sequelize.query(
      `select userid from usr where email='${email}'`
    );
    const [userNickname, nickNameMetadata] = await sequelize.query(
      `select nickname from userdetails where nickname='${nickName}'`
    );

    if (usrMetadata.rowCount === 1) {
      resolve("User already exist");
    } else if (nickNameMetadata.rowCount === 1) {
      resolve("Entered nickname already taked. Please enter another!");
    } else if (usrMetadata.rowCount === 0 && nickNameMetadata.rowCount === 0) {
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);

      const newUser = await sequelize.query(
        `insert into usr (userid, email, password, usertypeid, isactive) values((select max(userid)+1 from usr),'${email}', '${bcryptPassword}', 2, true) returning *`
      );
      sequelize.query(
        `insert into userdetails(userdetailid, firstname, lastname, nickname, dateofbirth, genderid, userid) values((select max(userdetailid)+1 from userdetails),
         '${firstName}', '${lastName}', '${nickName}','${dob}','${gender_type}', (select max(userid) from usr))`
      );
      resolve("User successfully created");
    }
  });
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
