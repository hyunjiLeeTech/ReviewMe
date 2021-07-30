const controller = {};

controller.review = require("./review.controller");
controller.library = require("./library.controller");
controller.wishlist = require("./wishlist.controller");
controller.profile = require("./profile.controller");
controller.users = require("./users.controller");
controller.books = require("./books.controller");

module.exports = controller;
