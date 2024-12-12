import axiosInstance from './axiosInstance';

export const getTopPlatformsApi = async () => {
  try {
    const { data }: GetPlatformsRes = await axiosInstance.get('/platforms/top-info');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchPlatformsApi = async (platformName: string) => {
  try {
    const { data }: GetPlatformsRes = await axiosInstance.get('/platforms/search', {
      params: { platformName },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPlatformPlansApi = async (platformId: number) => {
  try {
    const { data }: GetPlatformPlanRes = await axiosInstance.get('/platforms/search-plan', {
      params: { platformId },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
