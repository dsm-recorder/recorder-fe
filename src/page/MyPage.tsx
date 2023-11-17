import styled from 'styled-components';
import Withdraw from '@/components/MyPage/Withdraw';
import WritingProject from '@/components/MyPage/WritingProject';
import { GetUserInfo } from '@/api/users';
import { GetMyProjectList } from '@/api/projects';

const MyPage = () => {
  const { data: userInfo } = GetUserInfo();
  const { data: projectList } = GetMyProjectList();

  return (
    <Container>
      <PageTItle>마이페이지</PageTItle>
      <PageWrapper>
        <SideBarWrapper>
          <UserProfileImg src={userInfo?.profileImageUrl} alt='userImg' />
          <UserProfileId>
            {!!userInfo ? userInfo.accountId : 'Loading...'}
          </UserProfileId>
        </SideBarWrapper>
        <MainWrapper>
          <WritingProject projectList={projectList?.projects ?? []} />
          <Withdraw accountId={userInfo?.accountId ?? 'Loading...'} />
        </MainWrapper>
      </PageWrapper>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  min-height: calc(100vh - 120px);
  margin: 120px 180px;
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
  gap: 60px;
  margin-top: 50px;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const UserProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.gray[60]};
`;

const UserProfileId = styled.div`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 22px;
  font-weight: 400;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  height: auto;
`;
