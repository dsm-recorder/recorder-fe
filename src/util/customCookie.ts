import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const customCookie = {
  get: {
    accessToken: () => cookies.get('accessToken'),
    refreshToken: () => cookies.get('refreshToken'),
  },
  set: {
    token: (accessToken: string, refreshToken: string) => {
      const now = new Date();
      const accessTokenExpires = new Date();
      const refreshTokenExpires = new Date();

      accessTokenExpires.setHours(now.getHours() + 1);
      refreshTokenExpires.setDate(now.getDate() + 14);

      cookies.set('accessToken', accessToken, {
        path: '/',
        expires: accessTokenExpires,
      });
      cookies.set('refreshToken', refreshToken, {
        path: '/',
        expires: refreshTokenExpires,
      });
    },
  },
  remove: {
    accessToken: () => cookies.remove('accessToken'),
    refreshToken: () => cookies.remove('refreshToken'),
  },
} as const;
