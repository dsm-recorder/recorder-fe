import { instance } from '../axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IGetUserInfoResponse } from './type';
import { customCookie } from '@/util/customCookie';
import { defaultDomain } from '@/constant/env';

const ROUTER = 'users';

export const GetUserInfo = () => {
  const response = async () => {
    const { data } = await instance.get<IGetUserInfoResponse>(`${ROUTER}/my`);
    return data;
  };
  return useQuery(['userInfo'], response, {
    enabled: !!customCookie.get.accessToken(),
  });
};

export const DeleteUser = () => {
  const response = async (accountId: string) => {
    return instance.delete(`${ROUTER}`, { data: { accountId } });
  };
  return useMutation(response, {
    onError: () => {
      alert('계정 삭제에 실패하였습니다.');
    },
    onSuccess: () => {
      alert('계정이 삭제 되었습니다');
      customCookie.remove.accessToken();
      customCookie.remove.refreshToken();
      window.location.href = defaultDomain;
    },
  });
};
