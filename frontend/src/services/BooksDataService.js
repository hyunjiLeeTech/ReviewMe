import axios from "axios";

export default {
  getAllBooks(q, maxResults) {
    return axios
      .get(`/homepage`, {
        q: q,
        maxResults: maxResults,
      })
      .then((res) => {
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
  getBooksBySearch(title, author) {
    return axios
      .get(`/homepage`, { bookName: title, authorName: author })
      .then((res) => {
        if (res.data.errCode === 0) {
          return res.data.books;
        } else {
          console.log(res.data);
        }
      });
  },
};
