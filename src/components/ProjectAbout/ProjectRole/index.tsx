import * as Common from "../Common/style";
import * as _ from "./style";

const ProjectRole = ({ role }: { role: string }) => {
  return (
    <Common.ContentWrapper>
      <Common.Label>프로젝트에서 한 역할</Common.Label>
      <_.BoxWrapper>
        <_.Role>{role}</_.Role>
      </_.BoxWrapper>
    </Common.ContentWrapper>
  );
};

export default ProjectRole;
