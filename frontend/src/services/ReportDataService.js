/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    getReportByReportId(reportId) {
        return axios.get(`/reports/${reportId}`).then((res) => {
            if (res.data.errCode === 0) {
                return res.data.reports[0];
            } else {
                console.log(res.data);
            }
        });
    },
    getReportByReviewId(reviewId) {
        return axios.get(`/report/${reviewId}`).then((res) => {
            if (res.data.errCode === 0) {
                return res.data.reports[0];
            } else {
                console.log(res.data);
            }
        });
    },
    addReport(newReport) {
        return axios.post(`/reports/add`, newReport).then((res) => {
            if (res.data.errCode === 0) {
                return true;
            } else {
                return false;
            }
        });
    },
    deleteReport(reportId) {
        return axios.put(`/reports/delete`, { reportId: reportId }).then((res) => {
            if (res.data.errCode === 0) {
                return true;
            } else {
                return false;
            }
        });
    }
};