import axiosInstance from './axiosInstance';

export const getReportApi = async () => {
  try {
    const res = await axiosInstance.get('/subscriptions/report');
    return res.data;
  } catch (err) {
    throw err;
  }
};
