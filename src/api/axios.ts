import { ReissueToken } from './auth';
import axios, { AxiosError } from 'axios';
import { customCookie } from '../util/customCookie';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = customCookie.get.accessToken();
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
      const refreshToken = customCookie.get.refreshToken();
      if (
        error.response.data.message === 'jwt must be provided' ||
        error.response.data.message === 'Expired Token' ||
        error.response.data.message === 'User Not Found'
      ) {
        const originalRequest = config;

        if (refreshToken) {
          ReissueToken(refreshToken)
            .then((res) => {
              customCookie.set.token(res.accessToken, res.refreshToken);
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
                res.response?.data.message === 'jwt must be provided' ||
                res?.response?.data.message === 'Expired Token'
              ) {
                customCookie.remove.accessToken();
                customCookie.remove.refreshToken();
                window.location.replace('http://localhost:3000');
              }
            });
        }
      } else return Promise.reject(error);
    }
  }
);
