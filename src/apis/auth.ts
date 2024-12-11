import axiosInstance from './axiosInstance';

export const loginApi = async (code: string) => {
  try {
    const { data } = await axiosInstance.get('/auth/kakao/callback', { params: { code } });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const signupApi = async () => {
  try {
    const { data } = await axiosInstance.post('/auth/signup');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getTokenApi = async (refresh_token: string) => {
  try {
    const { data } = await axiosInstance.post('/auth/kakao/refresh', { refresh_token });
    return data;
  } catch (error) {
    console.error(error);
  }
};
