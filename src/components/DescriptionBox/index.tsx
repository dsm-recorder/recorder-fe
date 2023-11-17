import * as _ from "./style";

const ProjectDescription = ({ label, description }: { label: string, description?: string }) => {
  return (
    <_.ContentWrapper>
      <_.Label>{label}</_.Label>
      <_.BoxWrapper>
        <_.Description>{description}</_.Description>
      </_.BoxWrapper>
    </_.ContentWrapper>
  );
};

export default ProjectDescription;
