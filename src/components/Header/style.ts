import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 1000px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0px 200px;
  z-index: 99;
`;

export const Logo = styled.div`
  cursor: pointer;
  width: 150px;
  height: 60px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
`;

export const LoginWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 180px;
  height: 60px;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[20]};
  }
`;

export const Login = styled.div`
  height: 20px;
  font-size: 20px;
`;
