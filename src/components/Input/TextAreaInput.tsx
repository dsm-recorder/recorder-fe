import styled from 'styled-components';
import { ChangeEvent, HTMLAttributes } from 'react';

interface TextAreaType extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  width?: string;
  value?: string;
  height?: string;
  maxLength?: number;
  spellCheck?: boolean;
}

export const TextAreaInput = ({
  name,
  rows = 1,
  placeholder,
  label,
  width,
  height,
  value,
  onChange,
  maxLength,
  spellCheck = false,
}: TextAreaType) => {
  return (
    <TextAreaContainer>
      {label && <TextAreaInputLabel>{label}</TextAreaInputLabel>}
      <TextArea
        name={name}
        value={value}
        rows={rows}
        onChange={onChange}
        placeholder={placeholder}
        spellCheck={spellCheck}
        width={width}
        height={height}
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
  border: 1px solid ${({ theme }) => theme.colors.gray[50]};
  border-radius: 10px;
  padding: 15px;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '120px'};
`;
