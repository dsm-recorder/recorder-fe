import styled from 'styled-components';

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

export const Button = styled.button<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.gray[10]};
  font-size: 14px;
  font-weight: 400;
  background-color: ${({ bgColor, theme }) => {
    switch (bgColor) {
      case 'red': {
        return theme.colors.red.normal.default;
      }
      case 'green': {
        return theme.colors.green.normal.default;
      }
      default: {
        return bgColor;
      }
    }
  }};
  &:hover {
    background-color: ${({ bgColor, theme }) => {
      switch (bgColor) {
        case 'red': {
          return theme.colors.red.normal.hover;
        }
        case 'green': {
          return theme.colors.green.normal.hover;
        }
        default: {
          return bgColor;
        }
      }
    }};
  }
  &:active {
    background-color: ${({ bgColor, theme }) => {
      switch (bgColor) {
        case 'red': {
          return theme.colors.red.normal.active;
        }
        case 'green': {
          return theme.colors.green.normal.active;
        }
        default: {
          return bgColor;
        }
      }
    }};
  }
`;
