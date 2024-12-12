import axiosInstance from './axiosInstance';

export const loginApi = async (code: string) => {
  try {
    const { data }: ILoginRes = await axiosInstance.get('/auth/kakao/callback', {
      params: { code },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const signupApi = async (formData: ISignupReq) => {
  try {
    const { data }: ILoginRes = await axiosInstance.post('/auth/kakao/onboard', formData);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getTokenApi = async (refresh_token: string) => {
  try {
    const { data }: { data: { access_token: string } } = await axiosInstance.post(
      '/auth/kakao/refresh',
      { refresh_token },
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
