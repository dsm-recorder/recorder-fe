import React from 'react';
import styled from 'styled-components';

interface ImgInputType {
  value: string | null;
  label?: string;
  placeholder?: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageInput = ({
  value,
  handleImageChange,
  label,
  placeholder
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
        accept='image/*'
        onChange={handleImageChange}
      />
      <CustomCircleInput onClick={onCustomInputClick}>
        {value ? (
          <Img src={value} alt='Preview' />
        ) : (
            <CustomCircleLabel>{ placeholder }</CustomCircleLabel>
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

const CustomCircleInput = styled.label`
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  line-height: 200px;
  border: 1px solid #999999;
  cursor: pointer;
`;

const CustomCircleLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[50]};
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const InputLabelBox = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 400;
`;
