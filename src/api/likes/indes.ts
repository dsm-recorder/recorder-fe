import { useMutation } from '@tanstack/react-query';
import { instance } from '../axios';

const ROUTER = 'likes';

export const PostLikeProject = () => {
  const response = async (projectId: string) => {
    return instance.post(`${ROUTER}/${projectId}`);
  };
  return useMutation(response, {
    // onMutate: () => {
    // },
  });
};
