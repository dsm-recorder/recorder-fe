import { DeleteIcon } from '@/asset/icon';
import * as _ from './Modal.style';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '@/components/Input';
import { Button } from '@/components/Button';
import { ModalPropsType } from '.';
import { HStack } from '@/components/Stack';
import { GetPRContent, PatchPRContent } from '@/api/pr-records';

export const BugFixModal = ({ pr, onClose }: ModalPropsType) => {
  const [content, setContent] = useState<string>('');
  const [solution, setSolution] = useState<string | undefined>('');

  const { data: PRContent, isLoading: isPRContentLoading } = GetPRContent(
    pr.id
  );
  const { mutate: PRContentMutation } = PatchPRContent(pr.id);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (!isPRContentLoading && PRContent) {
      setContent(PRContent.content);
      setSolution(PRContent?.solution)
      setImages(PRContent.attachmentUrls);
    }
  }, [isPRContentLoading, PRContent]);

  const onPatch = () => {
    PRContentMutation({
      ...pr,
      content: content,
      solution: solution,
    });
  };

  return (
    <_.PRModalWrapper>
      <_.ModalHeaderWrapper>
        <HStack gap={30}>
          <_.ModalLabel>{pr.title}</_.ModalLabel>
          <_.TypeBox>버그 수정</_.TypeBox>
        </HStack>
        <DeleteIcon onClick={onClose} />
      </_.ModalHeaderWrapper>
      <_.ModalMainWrapper>
        <TextAreaInput
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label='버그 설명'
        />
        <TextAreaInput
          isAddImage={true}
          images={images}
          setImages={setImages}
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          label='버그 해결 방법'
        />
        <Button onClick={onPatch}>저장</Button>
      </_.ModalMainWrapper>
    </_.PRModalWrapper>
  );
};