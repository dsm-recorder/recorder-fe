import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { IPRRecordsListType, IPRResponseType } from './type';

const ROUTER = 'pr-records';

export const GetPRReport = (id: string) => {
  const response = async () => {
    const { data } = await instance.get<IPRRecordsListType>(`${ROUTER}/${id}`);

    return data;
  };

  return useQuery(['PRReport'], response);
};

export const GetPRContent = (id: string) => {
  const response = async () => {
    const { data } = await instance.get(`${ROUTER}/${id}`)
    
    return data
  }

  return useQuery(['PRContent'], response)
}

export const PatchPRContent = (id: string) => {
  const response = async (param: IPRResponseType) => {
    const { data } = await instance.patch(`${ROUTER}/${id}/`, param)
    
    return data
  }

  return useMutation(response)
}