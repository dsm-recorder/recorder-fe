import { useState } from 'react';
import styled from 'styled-components';
import { GetLikedProjects, GetPublishedProjects } from '@/api/projects';
import { HeartIcon } from '@/asset/icon';
import BlogCard from '@/components/BlogCard';
import { Input } from '@/components/Input';
import { HStack } from '@/components/Stack';
import useDebounce from '@/hook/useDebounce';
import { useInput } from '@/hook/useInput';
import { toLowerCase } from '@/util/toLowerCase';

const ProjectPage = () => {
  const { form, onChange } = useInput('');
  const [isShowLiked, setIsShowLiked] = useState(false);
  const debouncedValue = useDebounce(form);

  const { data: publishedProjects } = GetPublishedProjects();
  const { data: likedProjects } = GetLikedProjects();

  const showProjects = isShowLiked
    ? likedProjects?.projects
    : publishedProjects?.projects;

  const filteredProject = showProjects?.filter((project) =>
    toLowerCase(project.name).includes(toLowerCase(debouncedValue))
  );

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
          {filteredProject?.map((project) => (
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
`;
const Wrpaper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 1100px;
  min-height: 100vh;
  margin: 100px 0px;
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
