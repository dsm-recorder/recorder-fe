import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { IPRRecordsListType } from './type';

const ROUTER = 'pr-records';

export const GetPRReport = (id: string) => {
  const response = async () => {
    const { data } = await instance.get<IPRRecordsListType>(`${ROUTER}/${id}`);

    return data;
  };

  return useQuery(['PRReport'], response);
};