require("dotenv").config();
const Sequelize = require("sequelize");

var sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
    query: { raw: true, nest: true },
  }
);

module.exports.initialize = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .authenticate()
      .then(() => {
        resolve("Succesfully sync database");
      })
      .catch(() => {
        console.log("Unable to sync database");
      });
  });
};
