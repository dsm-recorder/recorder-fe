import { ReactNode, FC, MouseEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonContainer>
      <ButtonBox type="submit" onClick={onClick}>
        {children}
      </ButtonBox>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonBox = styled.button`
  width: auto;
  height: 40px;
  border-radius: 10px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.green.normal.default};
  color: ${({ theme }) => theme.colors.gray[10]};
`;
