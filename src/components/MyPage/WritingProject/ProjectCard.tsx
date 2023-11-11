import * as _ from './ProjectCard.style';
import { HStack } from '@/components/Stack';
import { ProjectType } from '@/api/projects/type';

const ProjectCard = ({ logoImageUrl, name, createdAt }: ProjectType) => {
  return (
    <_._Wrapper>
      <_._ProjectImg src={logoImageUrl} alt='projectImg' />
      <HStack
        align='center'
        justify='space-between'
        style={{ padding: '2px 10px 10px' }}
      >
        <_._Title>{name}</_._Title>
        <_._TEXT>{createdAt}</_._TEXT>
      </HStack>
    </_._Wrapper>
  );
};

export default ProjectCard;
