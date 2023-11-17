import { GetLikedProjects, GetPublishedProjects } from '@/api/projects';
import { HeartIcon } from '@/asset/icon';
import BlogCard from '@/components/BlogCard';
import { Input } from '@/components/Input';
import { HStack } from '@/components/Stack';
import { useInput } from '@/hook/useInput';
import { toLowerCase } from '@/util/toLowerCase';
import { useState } from 'react';
import styled from 'styled-components';

const ProjectPage = () => {
  const { form, onChange } = useInput('');
  const [isShowLiked, setIsShowLiked] = useState(false);

  const { data: publishedProjects } = GetPublishedProjects();
  const { data: likedProjects } = GetLikedProjects();

  const showProjects = isShowLiked
    ? likedProjects?.projects
    : publishedProjects?.projects;

  return (
    <Container>
      <Wrpaper>
        <Title>프로젝트 조회</Title>
        <FilterWrapper>
          <ClickLikeButton onClick={() => setIsShowLiked((prev) => !prev)}>
            좋아요한 프로젝트
            <HeartIcon isClicked={isShowLiked} />
          </ClickLikeButton>
          <Input
            width='300px'
            value={form}
            onChange={onChange}
            style={{ border: '2px solid #CCCCCC', backgroundColor: 'white' }}
            placeholder='검색어를 입력해주세요'
          />
        </FilterWrapper>
        <HStack wrap='wrap' gap={25}>
          {showProjects
            ?.filter((project) =>
              toLowerCase(project.name).includes(toLowerCase(form))
            )
            .map((project) => (
              <BlogCard key={project.id} {...project} />
            ))}
        </HStack>
      </Wrpaper>
    </Container>
  );
};

export default ProjectPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const Wrpaper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 1100px;
  height: 100vh;
  margin-top: 300px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  width: 100%;
`;

const ClickLikeButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  padding: 7px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
