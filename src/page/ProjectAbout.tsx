import styled from 'styled-components';
import ProjectDescription from '@/components/ProjectAbout/ProjectDescription';
import TodoList from '@/components/ProjectAbout/TodoList';
import PRList from '@/components/ProjectAbout/PR';
import { GetTodayReport } from '@/api/daily-reports';
import { useLocation } from 'react-router-dom';
import { GetPRReport } from '@/api/pr-records';
import { ProjectType } from '@/api/projects/type';
import { HStack, VStack } from '@/components/Stack';
import { Button } from '@/components/Button';

const ProjectAbout = () => {
  const location = useLocation();
  const state = location.state as ProjectType;

  const { data: todoLists } = GetTodayReport(state.id);
  const { data: prLists } = GetPRReport(state.id);

  return (
    <Container>
      <PageWrapper>
        <ProjectInfoWrapper>
          <HStack justify='space-between' gap={30}>
            <ProjectLogoImg alt='projectLogoImg' src={state.logoImageUrl} />
            <VStack>
              <ProjectName>{state.name}</ProjectName>
              <ProjectCreateAt>{state.createdAt} ~ </ProjectCreateAt>
            </VStack>
          </HStack>
          <Button onClick={() => console.log('종료')}>프로젝트 종료</Button>
        </ProjectInfoWrapper>
        <ProjectDescription description={state.description} />
        <TodoList todos={todoLists?.todos ?? []} />
        <PRList prRecords={prLists?.prRecords ?? []} />
      </PageWrapper>
    </Container>
  );
};

export default ProjectAbout;

const ProjectInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  padding: 180px 240px;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[30]};
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 800px;
  padding: 60px 120px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  gap: 60px;
`;

const ProjectLogoImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.gray[60]};
`;

const ProjectName = styled.div`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 36px;
  font-weight: 700;
`;

const ProjectCreateAt = styled.div`
  min-width: 200px;
  color: ${({ theme }) => theme.colors.gray[60]};
  font-size: 24px;
  font-weight: 600;
`;
