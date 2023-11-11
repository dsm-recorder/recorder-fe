import styled from 'styled-components';

export const _Container = styled.div`
  width: 100%;
  padding: 30px 250px 60px;
  background-color: ${({ theme }) => theme.colors.gray[80]};
`;

export const _TEXT = styled.div<{ size: number }>`
  color: ${({ theme }) => theme.colors.gray[10]};
  font-size: ${({ size }) => `${size}px`};
  font-weight: 400;
`;

export const _Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
`;
