import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../axios';
import { ISharedProjectDetail } from '../projects/type';

const ROUTER = 'likes';

export const PatchLikeProject = (projectId: string) => {
  const querykey = ['SharedProjectDetail', projectId];
  const queryClient = useQueryClient();

  const response = async () => {
    return instance.patch(`${ROUTER}/${projectId}`);
  };

  return useMutation(response, {
    onMutate: () => {
      queryClient.cancelQueries(querykey);

      const previousData = queryClient.getQueryData<ISharedProjectDetail>([
        ...querykey,
      ]);

      const currentData = {
        ...previousData,
        isLiked: !previousData?.isLiked,
        likeCount: !previousData?.isLiked
          ? previousData?.likeCount! + 1
          : previousData?.likeCount! - 1,
      };

      queryClient.setQueryData(querykey, currentData);

      return { previousData, currentData };
    },
    onSuccess: () => {
      // 쿼리 함수의 성공하면 -> 기존 선택지 데이터 무효화
      queryClient.invalidateQueries(querykey);
    },
    onError: (_error, _, context) => {
      queryClient.setQueryData(querykey, context);
    },
  });
};
