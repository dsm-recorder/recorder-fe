import styled from 'styled-components';
import { ChangeEvent, HTMLAttributes } from 'react';

interface TextAreaType extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  width?: string;
  value?: string;
  heigth?: string;
  maxLength?: number;
  spellCheck?: boolean;
}

export const TextAreaInput = ({
  rows = 1,
  placeholder,
  label,
  width,
  value,
  onChange,
  maxLength,
  spellCheck = false,
}: TextAreaType) => {
  return (
    <TextAreaContainer>
      {label && <TextAreaInputLabel>{label}</TextAreaInputLabel>}
      <TextArea
        value={value}
        rows={rows}
        onChange={onChange}
        placeholder={placeholder}
        spellCheck={spellCheck}
        width={width}
        maxLength={maxLength}
      />
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const TextAreaInputLabel = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 400;
`;

const TextArea = styled.textarea<{ width?: string; height?: string }>`
  resize: none;
  background: ${({ theme }) => theme.colors.gray[10]};
  border: 1px solid #999999;
  border-radius: 10px;
  padding: 15px;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '120px'};
`;