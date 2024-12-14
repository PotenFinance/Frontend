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
  response => response.data,
  async error => {
    const originalRequest = error.config;
    const refreshToken = getCookie('refreshToken');

    if (error.response?.status === 401) {
      try {
        const { data }: IGetTokenRes = await getTokenApi(refreshToken);
        setCookie('accessToken', data.access_token);
        return axiosInstance(originalRequest);
      } catch (err) {
        location.replace('/login');
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
