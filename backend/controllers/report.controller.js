const db = require("../models");
const sequelize = db.sequelize;

module.exports.getAllReports = () => {
    return new Promise((resolve, reject) => {
        sequelize
            .query("SELECT * FROM report r INNER JOIN reporttype rt ON r.reporttypeid=rt.reporttypeid AND isActive=true")
            .then((data) => {
                resolve({ errCode: 0, reports: data });
            })
            .catch((err) => {
                reject({ errCode: 1, message: "Failed to get all reports" });
            });
    });
};

module.exports.getReportByReportId = (reportId) => {
    return new Promise((resolve, reject) => {
        sequelize
            .query(
                `SELECT * FROM report r INNER JOIN reporttype rt ON r.reporttypeid=rt.reporttypeid WHERE r.reportid=${reportId} AND isActive=true`
            )
            .then((data) => {
                resolve({ errCode: 0, reports: data });
            })
            .catch((err) => {
                reject({ errCode: 1, message: "Failed to get report by report id" });
            });
    });
};

module.exports.addReport = (newReport) => {
    return new Promise(async (resolve, reject) => {
        if (
            typeof newReport.userId === "undefined" ||
            typeof newReport.reviewId === "undefined" ||
            typeof newReport.date === "undefined" ||
            typeof newReport.reporttypeId === "undefined"
        ) {
            reject({ errCode: 1, message: "Add report failed" });
        } else {
            const [results, metadata] = await sequelize.query(
                `INSERT INTO report (userid, reviewid, createdate, updatedate, comment, reporttypeid, isactive) 
                VALUES('${newReport.userId}', '${newReport.reviewId}', CAST('${newReport.date}' AS date), CAST('${newReport.date}' AS date), '${newReport.comment}', '${newReport.reporttypeId}', true)`
            );

            if (metadata === 1) {
                resolve({ errCode: 0, message: "Add report successful" });
            } else {
                reject({ errCode: 1, message: "Add report failed" });
            }
        }
    });
};

module.exports.deleteReport = (reportId) => {
    return new Promise(async (resolve, reject) => {
        if (typeof reportId === "undefined") {
            resolve({
                errCode: 1,
                message: "Delete report failed",
            });
        } else {
            const results = await sequelize.query(
                `UPDATE report SET isActive=false WHERE reportid=${reportId}`
            );

            if (results[1].rowCount === 1) {
                resolve({ errCode: 0, message: "Delete report successful" });
            } else {
                reject({ errCode: 1, message: "Delete report failed" });
            }
        }
    });
};