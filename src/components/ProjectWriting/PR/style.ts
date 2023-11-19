import styled from 'styled-components';

export const PRBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
`;

export const NoticeTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 24px;
`;

export const NoticeSub = styled.div`
  color: ${({ theme }) => theme.colors.gray[60]};
  font-size: 24px;
`;
