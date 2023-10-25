import styled from 'styled-components';
import Background from '../asset/background.png';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { HStack } from '../components/Stack';

const LandingPage = () => {
  return (
    <>
      <Container style={{ backgroundImage: `url(${Background})` }}>
        <Description>
          포트폴리오의 모든 것 <br />
          리코더에서 쉽고 간결하게
        </Description>
      </Container>
      <Container>
        <Title>이달의 포트폴리오</Title>
        <HStack gap={40}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </HStack>
      </Container>
      <Footer />
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
  color: ${({ theme }) => theme.colors.brown.light.default};
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 400;
`;
