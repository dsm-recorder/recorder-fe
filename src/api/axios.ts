import axios, { AxiosError } from 'axios';
import { customCookie } from '@/util/customCookie';
import { ReissueToken } from './auth';

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
        error.response.data.status === 403 ||
        error.response.data.status === 401 ||
        error.response.data.message === 'jwt must be provided' ||
        error.response.data.message === 'jwt malformed' ||
        error.response.data.message === 'RefreshToken NotFound'
      ) {
        if (refreshToken) {
          ReissueToken(refreshToken)
            .then((res) => {
              customCookie.set.token(res.accessToken, res.refreshToken);
              if (config) {
                if (config.headers)
                  config.headers[
                    'Authorization'
                  ] = `Bearer ${res?.accessToken}`;
                return axios(config);
              }
            })
            .catch(() => {
              customCookie.remove.accessToken();
              customCookie.remove.refreshToken();
              // window.location.replace('http://localhost:3000');
            });
        } else {
          customCookie.remove.accessToken();
          customCookie.remove.refreshToken();
          // window.location.replace('http://localhost:3000');
        }
      } else return Promise.reject(error);
    }
  }
);
