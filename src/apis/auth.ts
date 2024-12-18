import axiosInstance from './axiosInstance';

export const loginApi = async (code: string) => {
  try {
    const res = await axiosInstance.get('/auth/kakao/callback', {
      params: { code },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const signupApi = async (data: ISignupReq) => {
  try {
    const res = await axiosInstance.post('/auth/kakao/onboard', data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getTokenApi = async (refresh_token: string) => {
  try {
    const res = await axiosInstance.post('/auth/kakao/refresh', { refresh_token });
    return res.data;
  } catch (err) {
    throw err;
  }
};
