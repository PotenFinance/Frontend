import axiosInstance from './axiosInstance';

export const getTopPlatformsApi = async () => {
  try {
    const res = await axiosInstance.get('/platforms/top-info');
    return res.data;
  } catch (err) {
    console.error(err);
    // throw err;
  }
};

export const getSearchPlatformsApi = async (platformName: string) => {
  try {
    const res = await axiosInstance.get('/platforms/search', {
      params: { platformName },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    // throw err;
  }
};

export const getPlatformPlansApi = async (platformId: string) => {
  try {
    const res = await axiosInstance.get('/platforms/search-plan', {
      params: { platformId },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    // throw err;
  }
};
