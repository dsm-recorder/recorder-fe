import styled from 'styled-components';
import { VStack } from '../components/Stack';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <VStack
      style={{ width: '100vw', height: '100vh' }}
      align='center'
      justify='center'
      gap={30}
    >
      <Title>404</Title>
      <Discription>
        찾을 수 없는 페이지입니다.
        <br /> 요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하였습니다.
      </Discription>
      <Link to={'/'}>
        <Button>홈으로 이동</Button>
      </Link>
    </VStack>
  );
};

export default NotFoundPage;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.green.normal.default};
  font-size: 64px;
  font-weight: 400;
`;

const Discription = styled.div`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 36px;
  font-weight: 400;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green.normal.default};
  color: ${({ theme }) => theme.colors.gray[10]};
  font-size: 20px;
  font-weight: 400;
  padding: 12px 30px;
  border-radius: 10px;
`;
