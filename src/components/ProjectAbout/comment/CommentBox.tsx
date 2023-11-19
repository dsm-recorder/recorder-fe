import { VStack } from '@/components/Stack';
import styled from 'styled-components';
import WriteComment from './WriteComment';
import Comment from './Comment';
import { GetProjectComments } from '@/api/comments';

const CommentBox = ({ projectId }: { projectId: string }) => {
  const { data: projectComments } = GetProjectComments(projectId);
  return (
    <VStack gap={30} style={{ width: '100%' }}>
      <CommentCountBox>{projectComments?.count}개의 댓글</CommentCountBox>
      <WriteComment projectId={projectId} />
      {projectComments?.comments.map((comment) => (
        <Comment projectId={projectId} {...comment} />
      ))}
    </VStack>
  );
};

export default CommentBox;

const CommentCountBox = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
