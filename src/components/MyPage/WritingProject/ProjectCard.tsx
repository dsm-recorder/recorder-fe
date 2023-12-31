import * as _ from './ProjectCard.style';
import { HStack } from '@/components/Stack';
import { myProjectResponseType } from '@/api/projects/type';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({
  id,
  name,
  logoImageUrl,
  isPublished,
  createdAt,
  finishDate,
  description,
}: myProjectResponseType) => {
  const navigate = useNavigate();

  const handlePageMove = () => {
    if (isPublished == 1) {
      navigate(`/project/${name}`, {
        state: { id },
      });
    } else {
      navigate(`/project-writing/${name}`, {
        state: { id, name, logoImageUrl, createdAt, description },
      });
    }
  };

  return (
    <_._Wrapper
      onClick={handlePageMove}
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
