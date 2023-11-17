import * as Common from '../Common/style';
import * as _ from './style';

const ProjectLearned = ({ learned }: { learned: string }) => {
  return (
    <Common.ContentWrapper>
      <Common.Label>프로젝트에서 배운점</Common.Label>
      <_.BoxWrapper>
        <_.Learned>{learned}</_.Learned>
      </_.BoxWrapper>
    </Common.ContentWrapper>
  );
};

export default ProjectLearned;
