import { ChangeEvent, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputPropsType extends HTMLAttributes<HTMLInputElement> {
  // Input 요소
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'date';
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  spellCheck?: boolean;

  // Input 스타일 요소
  width?: string;
  height?: string;
  label?: string;
}

export const Input = ({ label, ...props }: InputPropsType) => {
  return (
    <InputContainer>
      {label && <InputLabelBox>{label}</InputLabelBox>}
      <InputBox {...props} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const InputLabelBox = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 400;
`;

const InputBox = styled.input<InputPropsType>`
  width: ${(props) => props.width ?? '300px'};
  height: ${(props) => props.height ?? '40px'};
  padding: 15px;
  background: ${({ theme }) => theme.colors.gray[10]};
  border: 1px solid #999999;
  border-radius: 10px;
  color: ${(props) =>
    props.value ? props.theme.colors.gray[100] : props.theme.colors.gray[50]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
