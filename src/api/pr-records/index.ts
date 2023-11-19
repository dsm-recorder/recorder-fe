import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import {
  IPRRecordsList,
  IPRRequestList,
  IPRRequest,
  IPRResponse,
} from './type';

const ROUTER = 'pr-records';

export const GetPRReport = (id: string) => {
  const response = async () => {
    const { data } = await instance.get<IPRRecordsList>(`${ROUTER}/${id}`);
    return data;
  };
  return useQuery(['PRReport', id], response);
};

export const GetPRContent = (id: string) => {
  const response = async () => {
    const { data } = await instance.get<IPRRequest>(`${ROUTER}/details/${id}`);
    return data;
  };
  return useQuery(['PRContent', id], response);
};

export const PatchPRContent = (id: string) => {
  const response = async (param: IPRResponse) => {
    const { data } = await instance.patch(`${ROUTER}/${id}`, param);
    return data;
  };
  return useMutation(response);
};

export const GetSharedPR = (id: string) => {
  const response = async () => {
    const { data } = await instance.get<IPRRequestList>(
      `${ROUTER}/${id}/published`
    );
    return data;
  };
  return useQuery(['SharedPR', id], response);
};
