import styled from 'styled-components';
import Download from '@/asset/icon/Download.svg';
import { ChangeEvent, HTMLAttributes } from 'react';
import { imageState } from '../ProjectAbout/PR/Modal';
import { DeleteIcon } from '@/asset/icon/DeleteIcon';

interface TextAreaType extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  width?: string;
  value?: string;
  height?: string;
  isAddImage?: boolean;
  images?: imageState[];
  setImages?: React.Dispatch<React.SetStateAction<imageState[]>>;
  maxLength?: number;
  spellCheck?: boolean;
}

export const TextAreaInput = ({
  rows = 1,
  placeholder,
  label,
  isAddImage,
  width,
  height,
  value,
  name,
  onChange,
  maxLength,
  images,
  setImages,
  spellCheck = false,
}: TextAreaType) => {
  const onChangeAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && setImages) {
      if (files.length === 0) {
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          setImages([
            ...images!,
            { renderer: reader.result as string, value: files[0] },
          ]);
        };
      }
    }
  };

  const onClickDeleteImage = (item: imageState) => {
    const replaceImages = images?.filter((element) => element !== item);
    setImages && setImages(replaceImages!);
  };

  return (
    <TextAreaContainer>
      <LabelWrapper>
        {label && <TextAreaInputLabel>{label}</TextAreaInputLabel>}
        {isAddImage && (
          <LabelStyled>
            <img src={Download} alt='DownloadIcon' />
            <InputStyled
              accept='image/*'
              type='file'
              onChange={onChangeAddImages}
            />
          </LabelStyled>
        )}
      </LabelWrapper>
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
      {isAddImage && (
        <ImagesContainer>
          {images?.map((item) => (
            <ImageWrapper key={item.renderer}>
              <Img src={item.renderer} alt='img' />
              <Div>
                <DeleteIconStyled onClick={() => onClickDeleteImage(item)} />
              </Div>
            </ImageWrapper>
          ))}
        </ImagesContainer>
      )}
    </TextAreaContainer>
  );
};

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 15px;
`;

const TextAreaInputLabel = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 600;
`;

const TextArea = styled.textarea<{ width?: string; height?: string }>`
  resize: none;
  color: ${({ theme }) => theme.colors.gray[100]};
  background: ${({ theme }) => theme.colors.gray[30]};
  border: none;
  border-radius: 10px;
  padding: 15px;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '170px'};
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
`;

const InputStyled = styled.input`
  display: none;
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  min-height: 130px;
  align-items: center;
  justify-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const DeleteIconStyled = styled(DeleteIcon)`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
`;

export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  max-width: 100px;
  max-height: 100px;
  min-height: 100px;
  min-width: 100px;
`;

export const Div = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
`;
