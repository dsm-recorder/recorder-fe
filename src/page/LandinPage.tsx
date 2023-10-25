import styled from 'styled-components';
import Background from '../asset/background.png';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Container style={{ backgroundImage: `url(${Background})` }}>
        <Description>
          포트폴리오의 모든 것 <br />
          리코더에서 쉽고 간결하게
        </Description>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Description = styled.p`
  text-align: center;
  font-size: 42px;
  color: ${({ theme }) => theme.colors.brown.light.default};
`;
