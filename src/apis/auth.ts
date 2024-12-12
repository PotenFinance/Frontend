import axiosInstance from './axiosInstance';

export const loginApi = async (code: string) => {
  try {
    const res = await axiosInstance.get('/auth/kakao/callback', {
      params: { code },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const signupApi = async (formData: ISignupReq) => {
  try {
    const res = await axiosInstance.post('/auth/kakao/onboard', formData);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getTokenApi = async (refresh_token: string) => {
  try {
    const res = await axiosInstance.post('/auth/kakao/refresh', { refresh_token });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
