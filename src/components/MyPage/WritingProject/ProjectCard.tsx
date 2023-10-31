import { HStack, VStack } from '../../Stack';
import * as _ from './ProjectCard.style';

const ProjectCard = () => {
  return (
    <_._Wrapper>
      <_._ProjectImg />
      <VStack style={{ padding: '2px 10px 10px' }} gap={12}>
        <HStack justify='space-between'>
          <_._TEXT>asdf1</_._TEXT>
          <_._TEXT>asdf2</_._TEXT>
        </HStack>
        <_._TEXT>asdf333</_._TEXT>
      </VStack>
    </_._Wrapper>
  );
};

export default ProjectCard;
