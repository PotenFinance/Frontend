import { getCookie, setCookie } from '@utils/cookie';
import axios from 'axios';
import { getTokenApi } from './auth';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = getCookie('accessToken');
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const refreshToken = getCookie('refreshToken');

    if (error.response?.status === 401) {
      try {
        const data: { access_token: string } = await getTokenApi(refreshToken);
        setCookie('accessToken', data.access_token);
        return axiosInstance(originalRequest);
      } catch (err) {
        alert('인증이 실패했습니다. 로그인 페이지로 이동합니다.');
        location.replace('/login');
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
