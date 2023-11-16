import { DeleteIcon } from '@/asset/icon';
import * as _ from './Modal.style';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '@/components/Input';
import { Button } from '@/components/Button';
import { ModalPropsType } from '.';
import { HStack } from '@/components/Stack';
import { GetPRContent, PatchPRContent } from '@/api/pr-records';

export const RefactModal = ({ pr, onClose }: ModalPropsType) => {
  const [content, setContent] = useState('');
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
      ...pr,
      content: content,
    });
  };

  return (
    <_.PRModalWrapper>
      <_.ModalHeaderWrapper>
        <HStack gap={30}>
          <_.ModalLabel>{pr.title}</_.ModalLabel>
          <_.TypeBox>리펙토링</_.TypeBox>
        </HStack>
        <DeleteIcon onClick={onClose} />
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
        <Button disabled={content === PRContent?.content} onClick={onPatch}>
          저장
        </Button>
      </_.ModalMainWrapper>
    </_.PRModalWrapper>
  );
};
