/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    getProfileByUserId(userId) {
        return axios.get(`/profile/${userId}`, { userId: userId }).then((res) => {
            if (res.data.errCode === 0) {
                return res.data.profile[0][0];
            } else {
                console.log(res.data);
            }
        });
    },
    deleteAccountProfile(userId) {
        return axios.put(`/profile/delete`, { userId: userId }).then((res) => {
            if (res.data.errCode === 0) {
                return true;
            } else {
                return false;
            }
        });
    },
    editProfile(newData) {
        return axios.put(`/profile/edit`, newData).then((res) => {
            if (res.data.errCode === 0) {
                return true;
            } else {
                return false;
            }
        });
    },
};