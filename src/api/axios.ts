import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';
import { ReissueToken } from './auth';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

const cookie = new Cookies();

instance.interceptors.request.use(
  (config) => {
    const accessToken = cookie.get('accessToken');
    const returnConfig = {
      ...config,
    };
    if (accessToken) {
      returnConfig.headers!['Authorization'] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { config } = error;
      const refreshToken = cookie.get('refreshToken');
      if (
        error.response.data.message === 'Invalid Token' ||
        error.response.data.message === 'Expired Token' ||
        error.response.data.message === 'User Not Found'
      ) {
        const originalRequest = config;

        if (refreshToken) {
          ReissueToken(refreshToken)
            .then((res) => {
              cookie.set('accessToken', res?.accessToken);
              cookie.set('refreshToken', res?.refreshToken);
              if (originalRequest) {
                if (originalRequest.headers)
                  originalRequest.headers[
                    'Authorization'
                  ] = `Bearer ${res?.accessToken}`;
                return axios(originalRequest);
              }
            })
            .catch((res: AxiosError<AxiosError>) => {
              if (
                res?.response?.data.status === 404 ||
                res.response?.data.status === 403 ||
                res?.response?.data.message === 'Expired Token' ||
                res.response?.data.message === 'Invalid Token'
              ) {
                cookie.remove('accessToken');
                cookie.remove('refreshToken');
              }
            });
          // } else {
          //   window.location.replace(
          //     'https://auth.entrydsm.hs.kr/login?redirect_url=https://apply.entrydsm.hs.kr'
          //   );
        }
      } else return Promise.reject(error);
    }
  }
);
