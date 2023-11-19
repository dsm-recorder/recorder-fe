import { styled } from 'styled-components';

export const HoverWrapper = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gray[60]};
  color: white;
  position: absolute;
  z-index: 100000;
  border-radius: 10px;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ErrorText = styled.div`
  font-size: 14px;
`