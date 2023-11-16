import * as _ from './ProjectCard.style';
import { HStack } from '@/components/Stack';
import { ProjectType } from '@/api/projects/type';

const ProjectCard = ({
  name,
  logoImageUrl,
  isPublished,
  createdAt,
  finishDate,
}: ProjectType) => {
  return (
    <_._Wrapper
      style={{ backgroundColor: isPublished ? '#4C4C4C' : '#FFFFFF' }}
    >
      {!!isPublished && <_._IsPublishedText>공유됨</_._IsPublishedText>}
      <_._ProjectImg src={logoImageUrl} alt='projectImg' />
      <HStack
        align='center'
        justify='space-between'
        style={{
          padding: '2px 10px 10px',
        }}
      >
        <_._Title style={{ color: isPublished ? 'white' : 'black' }}>
          {name}
        </_._Title>
        <_._TEXT style={{ color: isPublished ? 'white' : 'black' }}>
          {finishDate && `${finishDate} ~ `}
          {createdAt}
        </_._TEXT>
      </HStack>
    </_._Wrapper>
  );
};

export default ProjectCard;
