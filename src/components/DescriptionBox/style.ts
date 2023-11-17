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


export const BoxWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[30]};
  width: 100%;
  height: 170px;
  min-width: 450px;
  border-radius: 4px;
  padding: 15px;
`;

export const Description = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 18px;
  font-weight: 500;
`;
