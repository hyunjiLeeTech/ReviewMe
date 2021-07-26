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

module.exports.editProfile = (newData, userid) => {
    sequelize.query(
        `UPDATE userdetails SET firstname='${newData.firstname}',lastname='${newData.lastname}',nickname='${newData.nickname}' WHERE userid='${userid}' `
    );
}

module.exports.deleteAccountProfile = (userid) => {
    return new Promise((resolve, reject) => {
        sequelize
            .query(`UPDATE usr SET isactive=false WHERE userid='${userid}'`)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    })
}