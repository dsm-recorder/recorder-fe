import { DeleteIcon } from '@/asset/icon';
import * as _ from './Modal.style';
import { useState } from 'react';
import { TextAreaInput } from '@/components/Input';
import { Button } from '@/components/Button';
import { imageState } from '.';
import { HStack } from '@/components/Stack';
import { GetPRContent, PatchPRContent } from '@/api/pr-records';

export const RefactModal = ({ id, title, importance, type, onClick }: any) => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState<imageState[]>([]);

  const { data: PRContent } = GetPRContent(id);
  const { mutate: PRConatentMutation } = PatchPRContent(id);

  const onPatch = () => {
    PRConatentMutation({
      title: title,
      importance: importance,
      type: type,
      content: content,
    });
  };

  return (
    <_.PRModalWrapper>
      <_.ModalHeaderWrapper>
        <HStack gap={30}>
          <_.ModalLabel>{title}</_.ModalLabel>
          <_.TypeBox>리펙토링</_.TypeBox>
        </HStack>
        <DeleteIcon onClick={onClick} />
      </_.ModalHeaderWrapper>
      <_.ModalMainWrapper>
        <TextAreaInput
          isAddImage={true}
          images={images}
          setImages={setImages}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label='개선부분'
        />
        <Button disabled={content == PRContent} onClick={onPatch}>
          저장
        </Button>
      </_.ModalMainWrapper>
    </_.PRModalWrapper>
  );
};
