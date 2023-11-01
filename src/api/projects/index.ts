import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { ProjectType } from './type';

const ROUTER = '/projects';

export const GetMyProjectList = () => {
  const response = async () => {
    const { data } = await instance.get<ProjectType[]>(`${ROUTER}/my`);
    return data;
  };
  return useQuery(['myProject'], response);
};
