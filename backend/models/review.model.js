module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    reviewid: {
      type: Sequelize.INTEGER,
    },
    createdate: {
      type: Sequelize.DATE,
    },
    updatedate: {
      type: Sequelize.DATE,
    },
    comment: {
      type: Sequelize.STRING(400),
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    useriD: {
      type: Sequelize.INTEGER,
    },
    bookid: {
      type: Sequelize.STRING(250),
    },
    isactive: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Review;
};
