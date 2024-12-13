import axiosInstance from './axiosInstance';

export const getReportApi = async (year: number) => {
  try {
    const res = await axiosInstance.get('/report', { params: { year } });
    return res.data;
  } catch (err) {
    console.error(err);
    // throw err;
  }
};
