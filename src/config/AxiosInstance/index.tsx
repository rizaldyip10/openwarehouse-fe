import axios from 'axios';
import { getCookie } from './../cookie';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_DEV,
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const cookie = await getCookie();

    if (cookie) {
      request.headers['Authorization'] = `Bearer ${cookie.value}`;
    }

    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // console.log('Silently ignoring 401 error');
      return Promise.resolve(null);
    }
    return Promise.reject(error);
  },
);

export { axiosInstance };
