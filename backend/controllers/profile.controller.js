const db = require("../models");
const sequelize = db.sequelize;

module.exports.getAllProfiles = () => {
    return new Promise((resolve, reject) => {
        sequelize
            .query("SELECT * FROM userdetails ud INNER JOIN usr u ON ud.userid=u.userid")
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

module.exports.getProfileByUserId = (userid) => {
    return new Promise((resolve, reject) => {
        sequelize
            .query(`SELECT * FROM userdetails ud INNER JOIN usr u ON ud.userid=u.userid WHERE ud.userid='${userid}'`)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

module.exports.editProfile = (newData) => {
    return new Promise((resolve, reject) => {
        sequelize
            .query(
                `UPDATE userdetails SET firstname='${newData.firstname}',lastname='${newData.lastname}',nickname='${newData.nickname}' WHERE userid='${newData.userId}' `
            ).then(() => {
                resolve({ errCode: 0, message: "Profile edit successful" });
            })
            .catch((err) => {
                reject({ errCode: 0, message: "Profile edit failed" });
            })
    });
}

module.exports.deleteAccountProfile = (userId) => {
    return new Promise((resolve, reject) => {
        sequelize
            .query(`UPDATE usr SET isactive=false WHERE userid='${userId}'`)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    })
}