import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 450px;
  gap: 30px;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 28px;
  font-weight: 600;
`;
