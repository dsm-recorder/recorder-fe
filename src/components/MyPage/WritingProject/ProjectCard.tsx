import * as _ from './ProjectCard.style';
import { HStack, VStack } from '@/components/Stack';
import { ProjectType } from '@/api/projects/type';

const ProjectCard = ({
  logoImageUrl,
  name,
  createdAt,
  description,
}: ProjectType) => {
  return (
    <_._Wrapper>
      <_._ProjectImg src={logoImageUrl} alt='projectImg' />
      <VStack style={{ padding: '2px 10px 10px' }} gap={12}>
        <HStack justify='space-between'>
          <_._TEXT>{name}</_._TEXT>
          <_._TEXT>{createdAt}</_._TEXT>
        </HStack>
        <_._TEXT>{description}</_._TEXT>
      </VStack>
    </_._Wrapper>
  );
};

export default ProjectCard;
