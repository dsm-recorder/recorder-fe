import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { IPRRecordsListType, IPRRequestListType, IPRRequestType, IPRResponseType } from './type';

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
    const { data } = await instance.get<IPRRequestType>(`${ROUTER}/details/${id}`)
    
    return data
  }

  return useQuery(['PRContent'], response)
}

export const PatchPRContent = (id: string) => {
  const response = async (param: IPRResponseType) => {
    const { data } = await instance.patch(`${ROUTER}/${id}`, param)
    
    return data
  }

  return useMutation(response)
}

export const GetSharedPR = (id: string) => {
  const response = async () => {
    const { data } = await instance.get<IPRRequestListType>(
      `${ROUTER}/${id}/published`
    );
    return data
  }
  return useQuery(['SharedPR'],response)
}