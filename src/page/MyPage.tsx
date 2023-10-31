import styled from 'styled-components';
import sample from '../asset/ExampleBlog.png';
import { VStack } from '../components/Stack';
import Withdraw from '../components/MyPage/Withdraw';
import WritingProject from '../components/MyPage/WritingProject';
import { useTabMenu } from '../hook/useTabMenu';

const MyPage = () => {
  const { TabMenuBox, TabMenuItem } = useTabMenu(0, [
    <Withdraw />,
    <WritingProject />,
  ]);

  return (
    <Container>
      <PageTItle>마이페이지</PageTItle>
      <PageWrapper>
        <SideBarWrapper>
          <UserProfileImg src={sample} alt='sample' />
          <UserProfileId>qwertyboard</UserProfileId>
          <VStack>
            <TabMenuBox tabMenuKey={0}>계정</TabMenuBox>
            <TabMenuBox tabMenuKey={1}>프로젝트</TabMenuBox>
          </VStack>
        </SideBarWrapper>
        {TabMenuItem}
      </PageWrapper>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  min-height: calc(100vh - 120px);
  margin: 120px 180px 0 180px;
`;

const PageTItle = styled.div`
  width: 320px;
  border-bottom: 2px solid black;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 28px;
  font-weight: 400;
`;

const PageWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 50px;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const UserProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const UserProfileId = styled.div`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 22px;
  font-weight: 400;
`;
