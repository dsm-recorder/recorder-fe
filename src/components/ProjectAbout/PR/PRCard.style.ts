import { styled } from 'styled-components';

export const PRCardWrapper = styled.div`
  padding: 15px;
  min-width: 210px;
  height: 120px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray[70]};
`;

export const PRTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray[10]};
  font-size: 24px;
  font-weight: 600;
`;

export const PRType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brown.normal.default};
  color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 10px;
  font-size: 14px;
  padding: 15px;
  height: 30px;
  font-weight: 400;
`;

export const PRDate = styled.div`
  color: ${({ theme }) => theme.colors.gray[10]};
  font-size: 20px;
  font-weight: 500;
`;

export const PRProgressBar = styled.div`
  width: 240px;
  height: 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

export const PRImport = styled.div<{ barvalue?: number }>`
  width: ${({ barvalue }) => (barvalue ? `${barvalue}%` : '0px')};
  height: 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray[20]};
  font-size: 20px;
  font-weight: 500;
`;

export const ProgressTitle = styled.p`
  font-size: 14px;
  font-family: 400;
  color: ${({ theme }) => theme.colors.gray[10]};
`;

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

export const ProgressValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
