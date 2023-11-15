import { DeleteIcon } from '@/asset/icon';
import * as _ from './Modal.style';
import { useState } from 'react';
import { TextAreaInput } from '@/components/Input';
import { Button } from '@/components/Button';
import { ModalPropsType, imageState } from '.';
import { HStack } from '@/components/Stack';
import { PatchPRContent } from '@/api/pr-records';

export const BugFixModal = ({
  pr,
  onClose
}: ModalPropsType) => {
  const [content, setContent] = useState('');
  const [solution, setSolution] = useState('');

  const { mutate: PRConatentMutation } = PatchPRContent(pr.id);
  const [bugImages, setBugImages] = useState<imageState[]>([]);
  const [solutionImages, setSolutionImages] = useState<imageState[]>([]);

 const onPatch = () => {
   PRConatentMutation({
     ...pr,
     content: content,
     solution: solution
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
          isAddImage={true}
          images={bugImages}
          setImages={setBugImages}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label='버그 설명'
        />
        <TextAreaInput
          isAddImage={true}
          images={solutionImages}
          setImages={setSolutionImages}
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          label='버그 해결 방법'
        />
        <Button onClick={onPatch}>저장</Button>
      </_.ModalMainWrapper>
    </_.PRModalWrapper>
  );
};
