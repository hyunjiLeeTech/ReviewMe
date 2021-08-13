import axios from "axios";

export default {
  getWishListByUseId(userId) {
    return axios.get(`/wishlist/${userId}`).then((res) => {
      if (res.data.errCode === 0) {
        console.log(res.data.wishlist[0]);
        return res.data.wishlist[0];
      } else {
        console.log(res.data);
      }
    });
  },

  addWishlist(newBookItem) {
    return axios.post(`/wishlist/add`, newBookItem).then((res) => {
      if (res.data.errCode === 0) {
        return true;
      } else {
        return false;
      }
    });
  },

  deleteWishlist(deleteItemList) {
    return axios.delete(`/wishlist/delete/${deleteItemList}`).then((res) => {
      console.log(res.data.errCode);
      if (res.data.errCode === 0) {
        return true;
      } else {
        return false;
      }
    });
  },
};
