import styled from 'styled-components';
import { ChangeEvent, HTMLAttributes, useEffect, useState } from 'react';
import { DeleteIcon, DownloadIcon } from '@/asset/icon';
import { PostImage } from '@/api/images';
import { ErrorDisplay } from '@/components/SpellCheck';
import { Button } from '@/components/Button';

export interface ErrorInfo {
  help: string;
  orgStr: string;
  candWord: string;
}

interface TextAreaType extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name?: string;
  placeholder?: string;
  setValue: (e: string) => void;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  width?: string;
  value: string;
  height?: string;
  isAddImage?: boolean;
  isMapImage?: boolean;
  isSpellCheck?: boolean
  images?: string[];
  setImages?: React.Dispatch<React.SetStateAction<string[]>>;
  maxLength?: number;
  spellCheck?: boolean;
}

export const TextAreaInput = ({
  rows = 1,
  placeholder,
  label,
  isAddImage,
  isMapImage,
  isSpellCheck,
  width,
  height,
  value,
  name,
  onChange,
  setValue,
  maxLength,
  images,
  setImages,
  spellCheck = false,
}: TextAreaType) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const { mutate: ImageMutation, data: imgUrl } = PostImage();

  const onChangeAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      ImageMutation(file);
    }
  };

  const onClickDeleteImage = (item: string) => {
    const replaceImages = images?.filter((element: string) => element !== item);
    setImages && setImages(replaceImages!);
  };

  useEffect(() => {
    if (images && imgUrl && setImages) {
      setImages([...images, imgUrl.url]);
    } else if (imgUrl && setImages) setImages([imgUrl.url]);
  }, [imgUrl]);

  const handleSpellCheck = () => {
    setIsClick(true);
  };

  const handleEnd = () => {
    setIsClick(false);
  };

  return (
    <TextAreaContainer>
      <LabelWrapper>
        {label && <TextAreaInputLabel>{label}</TextAreaInputLabel>}
        {isAddImage && (
          <LabelStyled>
            <DownloadIcon />
            <InputStyled
              accept='image/*'
              type='file'
              onChange={onChangeAddImages}
            />
          </LabelStyled>
        )}
        {isSpellCheck && (
          <Button onClick={isClick ? handleEnd : handleSpellCheck}>
            {isClick ? '종료' : '검사 시작'}
          </Button>
        )}
      </LabelWrapper>
      <TextAreaWrapper width={width} height={height}>
        <TextArea
          style={{ display: isClick ? 'none' : 'block' }}
          name={name}
          rows={rows}
          onChange={onChange}
          placeholder={placeholder}
          spellCheck={spellCheck}
          value={value}
          maxLength={maxLength}
        />
        {isSpellCheck && (
          <ErrorDisplay
            value={value}
            isClick={isClick}
            setIsClick={setIsClick}
            setValue={setValue}
          />
        )}
      </TextAreaWrapper>
      {isMapImage && (
        <ImagesContainer>
          {images?.map((item) => (
            <ImageWrapper key={item}>
              <Img src={item} alt='img' />
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

const TextArea = styled.textarea`
  resize: none;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 14px;
  background: transparent;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
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
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const Div = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
`;

const TextAreaWrapper = styled.div<{ width?: string; height?: string }>`
  background: ${({ theme }) => theme.colors.gray[30]};
  border: none;
  overflow: auto;
  border-radius: 10px;
  padding: 15px;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '170px'};
`;
