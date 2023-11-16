import * as Common from '../Common/style';
import * as _ from './style';

const ProjectDescription = ({ description }: { description: string }) => {
  return (
    <Common.ContentWrapper>
      <Common.Label>프로젝트 설명</Common.Label>
      <_.BoxWrapper>
        <_.Description>{description}</_.Description>
      </_.BoxWrapper>
    </Common.ContentWrapper>
  );
};

export default ProjectDescription;
