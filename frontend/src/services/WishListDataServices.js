import axios from "axios";

export default {
  getWishListByUseId(userId) {
    console.log(userId);
    return axios.get(`/wishlist/${userId}`).then((res) => {
      if (res.data.errCode === 0) {
        return res.data.wishlist[0];
      } else {
        console.log(res.data);
      }
    });
  },
};
