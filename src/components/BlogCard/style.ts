import styled from 'styled-components';

export const _Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 283px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 8px;
`;

export const _IMG = styled.img`
  cursor: pointer;
  width: 100%;
  height: 243px;
`;

export const _CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 12px 16px;
`;

export const _UserProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const _TEXT = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
