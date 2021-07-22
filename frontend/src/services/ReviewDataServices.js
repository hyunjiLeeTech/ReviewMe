import axios from "axios";

export default {
  getReviewsByBookId(bookId) {
    return axios.get(`/reviews/${bookId}`).then((res) => {
      if (res.data.errCode === 0) {
        return res.data.reviews[0];
      } else {
        console.log(res.data);
      }
    });
  },
  addReview(newReview) {
    return axios.post(`/reviews/add`, newReview).then((res) => {
      if (res.data.errCode === 0) {
        return res.data.reviews[0];
      } else {
        console.log(res.data);
      }
    });
  },
};
