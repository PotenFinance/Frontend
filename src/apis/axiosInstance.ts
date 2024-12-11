import { getLocalStorageItem } from '@utils/localStorage';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    const token = getLocalStorageItem('@token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const token = getLocalStorageItem('@token');
    if (error.response.status === 401) {
      if (token) {
        console.error('401 Unauthorized: 토큰 재발급 필요');
      } else {
        console.error('401 Unauthorized: 로그인 필요');
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
