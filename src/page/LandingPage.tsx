import { useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { PostLogin } from '@/api/auth';
import Background from '@/asset/background.png';
import { CrownIcon } from '@/asset/icon';
import BlogCard from '@/components/BlogCard';
import { HStack } from '@/components/Stack';
import { GetMonthlyProject } from '@/api/projects';

const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const githubLoginCode = searchParams.get('code');
  const { mutate: loginMutate } = PostLogin();
  const { data: monthlyProject } = GetMonthlyProject();

  useEffect(() => {
    githubLoginCode && loginMutate(githubLoginCode);
  }, [githubLoginCode]);

  return (
    <>
      <Container id='main' style={{ backgroundImage: `url(${Background})` }}>
        <Description>
          <strong>포트폴리오</strong>의 모든 것 <br />
          리코더에서 쉽고 간결하게
        </Description>
      </Container>
      <Container>
        <Title>
          <img src={CrownIcon} alt='CrownIcon' />
          <br />
          이달의 포트폴리오
        </Title>
        <HStack gap={40}>
          {monthlyProject?.projects?.map((project) => (
            <BlogCard {...project} />
          ))}
        </HStack>
      </Container>
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.greenSurface.light.default};
`;

const Description = styled.p`
  text-align: center;
  font-size: 42px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.brown.light.default};
`;

const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
`;
