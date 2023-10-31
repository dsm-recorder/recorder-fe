import styled from 'styled-components';

export const _NoticeMessageWrapper = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[50]};
  border-radius: 10px;
`;

export const _IdInput = styled.input`
  font-size: 16px;
  padding: 8px 20px;
  border: 2px solid ${({ theme }) => theme.colors.gray[50]};
  border-radius: 10px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.gray[100]};
  }
`;
