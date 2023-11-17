import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { HStack, VStack } from '@/components/Stack';
import ProjectLearned from '@/components/ProjectAbout/ProjectLearned';
import ProjectRole from '@/components/ProjectAbout/ProjectRole';
import ProjectDescription from '@/components/ProjectAbout/ProjectDescription';
import PRList from '@/components/ProjectAbout/PR';
import { Button } from '@/components/Button';
import { HeartIcon } from '@/asset/icon';
import { GetSharedProjectDetail } from '@/api/projects';
import { GetSharedPR } from '@/api/pr-records';

const ProjectAboutPage = () => {
  const location = useLocation();

  const state = location.state as { id: string };

  const { data: SharedProject } = GetSharedProjectDetail(state.id);
  const { data: SharedPR } = GetSharedPR(state.id);

  return (
    <Container>
      <PageWrapper>
        <ProjectInfoWrapper>
          <HStack justify='space-between' gap={30}>
            <ProjectLogoImg
              alt='projectLogoImg'
              src={SharedProject?.logoImageUrl ?? ''}
            />
            <VStack justify='space-between'>
              <HStack gap={30} align='center'>
                <ProjectName>{SharedProject?.name ?? ''}</ProjectName>
                <HStack align='center' gap={5}>
                  <HeartIcon isClicked={SharedProject?.isLiked ?? false} />
                  {SharedProject?.likeCount ?? 0}
                </HStack>
              </HStack>
              <ProjectCreateAt>
                {SharedProject?.startDate ?? ''} ~
                {SharedProject?.finishDate ?? ''}
              </ProjectCreateAt>
              <ProjectSkills>{SharedProject?.skills.map((skill) => `${skill}, `)}</ProjectSkills>
            </VStack>
          </HStack>
        </ProjectInfoWrapper>
        <ProjectDescription description={SharedProject?.about ?? ''} />
        <ProjectRole role={SharedProject?.role ?? ''} />
        <PRList prRecords={SharedPR?.prRecords ?? []} />
        <ProjectLearned learned={SharedProject?.learned ?? ''} />
        <Button onClick={() => history.back()}>돌아가기</Button>
      </PageWrapper>
    </Container>
  );
};

export default ProjectAboutPage;

const ProjectInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
`;

const Container = styled.div`
  padding: 180px 300px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[10]};
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 800px;
  padding: 60px 120px;
  align-items: center;
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

const ProjectSkills = styled.div`
  font-size: 22px;
  font-family: 500;
`;
