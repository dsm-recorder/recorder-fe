import React from 'react';
import styled from 'styled-components';

interface ImgInputType {
  value: string | null;
  label?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageInput = ({
  value,
  handleImageChange,
  label,
  width,
  height,
  placeholder,
}: ImgInputType) => {
  const onCustomInputClick = () => {
    const fileInput = document.getElementById('imageInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <ImgInputContainer>
      {label && <InputLabelBox>{label}</InputLabelBox>}
      <StyledInput
        id='imageInput'
        type='file'
        accept='image/png, image/jpg, image/jpeg'
        onChange={handleImageChange}
      />
      <CustomCircleInput
        onClick={onCustomInputClick}
        width={width}
        height={height}
      >
        {value ? (
          <Img src={value} alt='Preview' width={width} height={height} />
        ) : (
          <CustomCircleLabel>{placeholder}</CustomCircleLabel>
        )}
      </CustomCircleInput>
    </ImgInputContainer>
  );
};

const ImgInputContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledInput = styled.input`
  display: none;
`;

const CustomCircleLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[50]};
`;

const CustomCircleInput = styled.label<{ width?: string; height?: string }>`
  display: inline-block;
  width: ${({ width }) => width ?? '180px'};
  height: ${({ height }) => height ?? '180px'};
  border-radius: 50%;
  text-align: center;
  line-height: ${({ height }) => height ?? '180px'};
  border: 1px solid #999999;
  cursor: pointer;
`;

const Img = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? '180px'};
  height: ${({ height }) => height ?? '180px'};
  border-radius: 50%;
`;

const InputLabelBox = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 400;
`;
