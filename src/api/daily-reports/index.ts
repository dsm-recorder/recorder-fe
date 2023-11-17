import { useQuery, useMutation } from '@tanstack/react-query';
import { instance } from '../axios';
import { TodoListType } from './type';

const ROUTER = 'daily-reports';

export const GetTodayReport = (id: string) => {
  const response = async () => {
    const { data } = await instance.get<TodoListType>(`${ROUTER}/${id}/today`);

    return data;
  };

  return useQuery(['todayReport', id], response);
};

export const DeleteReport = () => {
  const response = async (id: string) => {
    const { data } = await instance.delete(`${ROUTER}/${id}`);

    return data;
  };

  return useMutation(response);
};

export const PostAddReport = (id: string) => {
  const response = async (param: { content: string }) => {
    const { data } = await instance.post(`${ROUTER}/${id}`, param);

    return data;
  };

  return useMutation(response);
};

export const PatchReport = () => {
  const response = async (id: string) => {
    const { data } = await instance.patch(`${ROUTER}/${id}`);

    return data;
  };

  return useMutation(response);
};
