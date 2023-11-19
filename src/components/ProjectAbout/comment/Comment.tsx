import styled from 'styled-components';
import { commentType } from '@/api/comments/type';
import { HStack, VStack } from '@/components/Stack';
import TrashCanIcon from '@/asset/icon/TrashCanIcon';
import { DeleteProjectComment } from '@/api/comments';

interface ICommentProps extends commentType {
  projectId: string;
}

const Comment = ({
  projectId,
  id,
  userLogoImageUrl,
  userAccountId,
  createdAt,
  content,
  isMine,
}: ICommentProps) => {
  const { mutate: deleteProjectComment } = DeleteProjectComment(projectId, id);
  return (
    <VStack
      gap={20}
      style={{ borderBottom: '1px solid #747474', paddingBottom: '10px' }}
    >
      <HStack align='center' justify='space-between'>
        <HStack gap={10}>
          <UserImg src={userLogoImageUrl} alt='userLogoImageUrl' />
          <VStack align='start' justify='center'>
            <UserName>{userAccountId}</UserName>
            <CreateAtBox>{createdAt}</CreateAtBox>
          </VStack>
        </HStack>
        {isMine && (
          <TrashCanIcon cursor='pointer' onClick={deleteProjectComment} />
        )}
      </HStack>
      <ContentBox>{content}</ContentBox>
    </VStack>
  );
};

export default Comment;

const UserImg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 32px;
`;

const UserName = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const CreateAtBox = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ContentBox = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
`;
