const controller = {};

controller.review = require("./review.controller");
controller.library = require("./library.controller");
controller.wishlist = require("./wishlist.controller");
controller.profile = require("./profile.controller");

module.exports = controller;
