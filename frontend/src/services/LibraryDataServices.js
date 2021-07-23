import axios from "axios";

export default {
  getLibraryByUseId(userId) {
    console.log(userId);
    return axios.get(`/library/${userId}`).then((res) => {
      if (res.data.errCode === 0) {
        console.log(res.data);
        return res.data.libraries[0];
      } else {
        console.log(res.data);
      }
    });
  },
};
