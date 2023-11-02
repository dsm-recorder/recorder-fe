import * as Common from '../Common/style';
import * as _ from './style';
import { HStack, VStack } from '../../Stack';
import ProjectCard from './ProjectCard';
import AddNoteIcon from '../../../asset/icon/AddNoteIcon';
import { ProjectType } from '../../../api/projects/type';
import { NoticeIcon } from '../../../asset/icon';

interface IWritingProjectProps {
  projectList: ProjectType[];
}

const WritingProject = ({ projectList }: IWritingProjectProps) => {
  return (
    <Common.ContentWrapper>
      <HStack justify='space-between'>
        <Common.ContentTitle>기록중인 프로젝트</Common.ContentTitle>
        <Common.Button bgcolor='green'>
          <AddNoteIcon /> New
        </Common.Button>
      </HStack>
      <HStack gap={30} wrap='wrap'>
        {projectList[0] ? (
          projectList.map((project) => <ProjectCard {...project} />)
        ) : (
          <VStack
            style={{ width: '100%', height: '100%', marginTop: '30px' }}
            align='center'
            gap={30}
          >
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
