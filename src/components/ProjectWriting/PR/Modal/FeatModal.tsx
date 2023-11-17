import { DeleteIcon } from '@/asset/icon';
import * as _ from './Modal.style';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '@/components/Input';
import { Button } from '@/components/Button';
import { ModalPropsType } from '.';
import { HStack } from '@/components/Stack';
import { GetPRContent, PatchPRContent } from '@/api/pr-records';
import { PRType } from '@/api/pr-records/type';

export const FeatModal = ({ pr, onClose }: ModalPropsType) => {
  const [content, setContent] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);

  const { data: PRContent, isLoading: isPRContentLoading } = GetPRContent(
    pr.id
  );
  const { mutate: PRContentMutation } = PatchPRContent(pr.id);

  useEffect(() => {
    if (!isPRContentLoading && PRContent) {
      setContent(PRContent.content);
      setImages(PRContent.attachmentUrls);
    }
  }, [isPRContentLoading, PRContent]);

  const onPatch = () => {
    PRContentMutation({
      title: pr.title,
      importance: pr.importance,
      type: PRType.NEW_FEATURE,
      content: content,
      attachmentUrls: images,
    });
  };

  return (
    <_.PRModalWrapper>
      <_.ModalHeaderWrapper>
        <HStack gap={30}>
          <_.ModalLabel>{pr.title}</_.ModalLabel>
          <_.TypeBox>기능 추가</_.TypeBox>
        </HStack>
        <DeleteIcon onClick={onClose} />
      </_.ModalHeaderWrapper>
      <_.ModalMainWrapper>
        <TextAreaInput
          isAddImage={true}
          isMapImage={true}
          images={images}
          setImages={setImages}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label='설명'
        />
        <Button onClick={onPatch}>저장</Button>
      </_.ModalMainWrapper>
    </_.PRModalWrapper>
  );
};
