import * as _ from './style';
import * as Common from '../Common/style';
import { HStack, VStack } from '@/components/Stack';
import ProjectCard from './ProjectCard';
import { ProjectType } from '@/api/projects/type';
import { NoticeIcon } from '@/asset/icon';
import { Link } from 'react-router-dom';

interface IWritingProjectProps {
  projectList: ProjectType[];
}

const WritingProject = ({ projectList }: IWritingProjectProps) => {
  return (
    <Common.ContentWrapper>
      <HStack justify='space-between'>
        <Common.ContentTitle>기록중인 프로젝트</Common.ContentTitle>
        <Link to='/project-register'>
          <Common.Button bgcolor='green'>
            프로젝트 추가
          </Common.Button>
        </Link>
      </HStack>
      <HStack gap={30} wrap='wrap'>
        {projectList[0] ? (
          projectList.map((project) => <ProjectCard {...project} />)
        ) : (
          <VStack style={{ width: '100%' }} align='center' gap={30}>
            <NoticeIcon size={100} />
            <_._NoticeTitle>기록중인 프로젝트가 없습니다</_._NoticeTitle>
            <_._NoticeSub>
              프로젝트를 등록하여 포트폴리오를 채워보세요!
            </_._NoticeSub>
          </VStack>
        )}
      </HStack>
    </Common.ContentWrapper>
  );
};

export default WritingProject;
