import * as Common from '../Common/style';
import { HStack } from '../../Stack';
import ProjectCard from './ProjectCard';
import AddNoteIcon from '../../../asset/icon/AddNoteIcon';

const Withdraw = () => {
  return (
    <Common.ContentWrapper>
      <HStack justify='space-between'>
        <Common.ContentTitle>기록중인 프로젝트</Common.ContentTitle>
        <Common.Button bgColor='green'>
          <AddNoteIcon /> New
        </Common.Button>
      </HStack>
      <HStack gap={30} wrap='wrap'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </HStack>
    </Common.ContentWrapper>
  );
};

export default Withdraw;
