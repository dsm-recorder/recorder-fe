import * as Common from '../Common/style';
import { HStack } from '../../Stack';
import ProjectCard from './ProjectCard';
import AddNoteIcon from '../../../asset/icon/AddNoteIcon';
import { ProjectType } from '../../../api/projects/type';

interface IWritingProjectProps {
  projectList?: ProjectType[];
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
        {projectList?.map((project) => (
          <ProjectCard {...project} />
        ))}
      </HStack>
    </Common.ContentWrapper>
  );
};

export default WritingProject;
