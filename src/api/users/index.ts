import { instance } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { IGetUserInfoResponse } from './type';

const ROUTER = 'users';

export const GetUserInfo = () => {
  const response = async () => {
    const { data } = await instance.get<IGetUserInfoResponse>(`${ROUTER}/my`);
    return data;
  };
  return useQuery(['userInfo'], response);
};
