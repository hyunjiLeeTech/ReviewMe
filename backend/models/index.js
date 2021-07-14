const Sequelize = require("sequelize");
const sequelize = new Sequelize(
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
    query: { raw: true },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.reviews = require("./review.model.js")(sequelize, Sequelize);
// db.reviewController = require("../controllers/review.controller");

db.initialize = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .sync()
      .then(() => {
        resolve("Succesfully sync database");
      })
      .catch(() => {
        reject("Unable to sync the database");
      });
  });
};

module.exports = db;
