import styled from 'styled-components';

export const _Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const _IMG = styled.img`
  cursor: pointer;
  width: 100%;
  height: 203px;
  object-fit: cover;
`;

export const _CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6px 12px;
`;

export const _UserProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const _TEXT = styled.div<{ size: number; weight: number }>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
`;
