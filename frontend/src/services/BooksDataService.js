import axios from "axios";

export default {
  getAllBooks() {
    return axios.get(`/homepage`).then((res) => {
      if (res.data.errCode === 0) {
        return res.data.books;
      } else {
        console.log(res.data);
      }
    });
  },
  getBooksByID(id) {
    return axios.get(`/details/${id}`).then((res) => {
      if (res.data.errCode === 0) {
        return res.data.books;
      } else {
        console.log(res.data);
      }
    });
  },
  getBooksByTitle(title) {
    return axios.get(`/search`, title).then((res) => {
      if (res.data.errCode === 0) {
        return res.data.books;
      } else {
        console.log(res.data);
      }
    });
  },
  getBooksByAuthor(title, author) {
    return axios.get(`/search`, title, author).then((res) => {
      if (res.data.errCode === 0) {
        return res.data.books;
      } else {
        console.log(res.data);
      }
    });
  },
};
