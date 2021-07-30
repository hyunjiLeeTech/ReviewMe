const fetch = require("node-fetch");
require("dotenv").config();

module.exports.getAllBooks = () => {
  return new Promise(function (resolve, reject) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=fiction&key=${process.env.API_KEY}&maxResults=15`
    )
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.getBooksByID = (id) => {
  return new Promise(function (resolve, reject) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.getBooksByTitle = (title) => {
  return new Promise(function (resolve, reject) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.getBooksByAuthor = (author) => {
  return new Promise(function (resolve, reject) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${process.env.API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
