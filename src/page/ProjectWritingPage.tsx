import styled from 'styled-components';
import TodoList from '@/components/ProjectWriting/TodoList';
import { GetTodayReport } from '@/api/daily-reports';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetPRReport } from '@/api/pr-records';
import { myProjectResponseType } from '@/api/projects/type';
import { HStack, VStack } from '@/components/Stack';
import { Button } from '@/components/Button';
import PRList from '@/components/ProjectWriting/PR';
import ProjectDescription from '@/components/DescriptionBox';

const ProjectWritingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as myProjectResponseType;

  const { data: todoLists } = GetTodayReport(state.id);
  const { data: prLists } = GetPRReport(state.id);

  const handleButtonClick = () => {
    navigate(`/project-writing/${state.name}/sharing`, {
      state: { id: state.id },
    });
  };

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
          <Button onClick={handleButtonClick}>프로젝트 종료</Button>
        </ProjectInfoWrapper>
        <ProjectDescription description={state.description} label='프로젝트 설명'/>
        <TodoList todos={todoLists?.todos ?? []} />
        <PRList prRecords={prLists?.prRecords ?? []} />
      </PageWrapper>
    </Container>
  );
};

export default ProjectWritingPage;

const ProjectInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
`;

const Container = styled.div`
  padding: 180px 240px;
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
