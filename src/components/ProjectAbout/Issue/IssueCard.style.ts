import styled from 'styled-components';

export const PRCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 360px;
  background-color: ${({ theme }) => theme.colors.gray[70]};
  border-radius: 5px;
  padding: 15px;
  gap: 20px;
`;

export const PRTitle = styled.p`
  font-size: 26px;
  font-family: 400;
  color: ${({ theme }) => theme.colors.gray[10]};
`;

export const SubTitle = styled.p`
  font-size: 22px;
  font-family: 400;
  color: ${({ theme }) => theme.colors.gray[10]};
`;

export const Content = styled.p`
  height: 180px;
  font-size: 18px;
  font-family: 400;
  color: ${({ theme }) => theme.colors.gray[10]};
`;

export const ImgWrapper = styled.div`
  overflow-x: auto;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const Img = styled.img`
  max-height: 180px;
  min-height: 180px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
