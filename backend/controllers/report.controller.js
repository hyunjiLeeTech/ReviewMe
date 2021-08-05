const db = require("../models");
const sequelize = db.sequelize;

module.exports.getAllReports = () => {
    return new Promise((resolve, reject) => {
        sequelize
            .query("SELECT * FROM report r INNER JOIN reporttype rt ON r.reporttypeid=rt.reporttypeid")
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
                `SELECT * FROM report r INNER JOIN reporttype rt ON r.reporttypeid=rt.reporttypeid WHERE r.reportid=${reportId}`
            )
            .then((data) => {
                resolve({ errCode: 0, reports: data });
            })
            .catch((err) => {
                reject({ errCode: 1, message: "Failed to get report by report id" });
            });
    });
};