import axios from "axios";

export default {
  getAllBooks(bookParams) {
    return axios
      .get(`/homepage/${bookParams.q}&${bookParams.maxResults}`, bookParams)
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
  getBooksBySearch(bookParams) {
    console.log(bookParams);
    return axios
      .get(`/homepage/${bookParams.q}&${bookParams.inauthor}`, bookParams)
      .then((res) => {
        if (res.data.errCode === 0) {
          return res.data.books;
        } else {
          console.log(res.data);
        }
      });
  },
};
