import axios from "axios";

export default {
  getLibraryByUseId(userId) {
    console.log(userId);
    return axios.get(`/library/${userId}`).then((res) => {
      if (res.data.errCode === 0) {
        console.log(res.data.libraries[0]);
        return res.data.libraries[0];
      } else {
        console.log(res.data);
      }
    });
  },

  addLibraryItem(newBookItem) {
    console.log(newBookItem);
    return axios.post(`/library/add`, newBookItem).then((res) => {
      if (res.data.errCode === 0) {
        return true;
      } else {
        return false;
      }
    });
  },

  deleteLibraryItem(deleteItemList) {
    return axios.delete(`/library/delete/${deleteItemList}`).then((res) => {
      if (res.data.errCode === 0) {
        return true;
      } else {
        return false;
      }
    });
  },
};
