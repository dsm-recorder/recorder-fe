import { Cookies } from 'react-cookie';
import { instance } from '../axios';
import { IAuthorizationResponse } from './types';
import { useMutation } from '@tanstack/react-query';

const ROUTER = 'auth';
const cookies = new Cookies();

export const ReissueToken = async (refresh_token: string) => {
  const response = await instance.put<IAuthorizationResponse>(
    `${ROUTER}/reissue`,
    null,
    {
      headers: {
        'X-Refresh-Token': `${refresh_token}`,
      },
    }
  );
  return response.data;
};

export const PostLogin = () => {
  const response = async (code: string) => {
    return instance.get<IAuthorizationResponse>(`${ROUTER}/login?code=${code}`);
  };
  return useMutation(response, {
    onSuccess: (res) => {
      cookies.set('accessToken', res.data.accessToken);
      cookies.set('refreshToken', res.data.refreshToken);
    },
    onError: () => {
      alert('로그인에 실패하였습니다.');
    },
    onSettled: () => {
      window.location.href = 'http://localhost:3000';
    },
  });
};
