import * as _ from './ProjectCard.style';
import { HStack } from '@/components/Stack';
import { ProjectType } from '@/api/projects/type';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({
  id,
  logoImageUrl,
  name,
  createdAt,
  description,
}: ProjectType) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/project-writing/${id}`, {
      state: { id, logoImageUrl, name, createdAt, description },
    });
  };

  return (
    <_._Wrapper onClick={handleButtonClick}>
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
