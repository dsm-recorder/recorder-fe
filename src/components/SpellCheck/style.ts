import { styled } from 'styled-components';

export const HoverWrapper = styled.div`
  width: 400px;
  height: auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gray[60]};
  color: white;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;