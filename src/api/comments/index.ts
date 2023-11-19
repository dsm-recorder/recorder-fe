import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from '../axios';
import { GetProjectCommentsResponse } from './type';

const ROUTER = '/comments';

export const GetProjectComments = (projectId: string) => {
  const response = async () => {
    const { data } = await instance.get<GetProjectCommentsResponse>(
      `${ROUTER}/${projectId}`
    );
    return data;
  };
  return useQuery(['comments', projectId], response);
};

export const PostProjectComment = (projectId: string) => {
  const queryclient = useQueryClient();
  const response = async (content: string) => {
    return instance.post(`${ROUTER}/${projectId}`, { content });
  };
  return useMutation(response, {
    onSuccess: () => {
      queryclient.invalidateQueries(['comments', projectId]);
    },
  });
};

export const DeleteProjectComment = (projectId: string, commentId: string) => {
  const queryclient = useQueryClient();
  const response = async () => {
    return instance.delete(`${ROUTER}/${commentId}`);
  };
  return useMutation(response, {
    onSuccess: () => {
      queryclient.invalidateQueries(['comments', projectId]);
    },
  });
};
