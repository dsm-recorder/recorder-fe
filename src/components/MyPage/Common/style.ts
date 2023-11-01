import styled from 'styled-components';
import { ColorType } from '../../../types';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  min-width: 450px;
`;

export const ContentTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 22px;
  font-weight: 400;
`;

export const Button = styled.button<{ bgcolor: ColorType }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.gray[10]};
  font-size: 14px;
  font-weight: 400;
  background-color: ${({ bgcolor, theme }) =>
    theme.colors[bgcolor].normal.default};
  &:disabled {
    cursor: no-drop;
    background-color: ${({ bgcolor, theme }) =>
      theme.colors[bgcolor].light.active};
    &:hover {
      background-color: ${({ bgcolor, theme }) =>
        theme.colors[bgcolor].light.active};
    }
    &:active {
      background-color: ${({ bgcolor, theme }) =>
        theme.colors[bgcolor].light.active};
    }
  }

  &:hover {
    background-color: ${({ bgcolor, theme }) =>
      theme.colors[bgcolor].normal.hover};
  }
  &:active {
    background-color: ${({ bgcolor, theme }) =>
      theme.colors[bgcolor].normal.active};
  }
`;
