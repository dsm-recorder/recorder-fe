import { IPRRecords } from '@/api/pr-records/type';
import * as _ from './Modal.style';
import { HStack } from '@/components/Stack';
import { TextAreaInput } from '@/components/Input';
import { DeleteIcon } from '@/asset/icon';
import { GetPRContent, PatchPRContent } from '@/api/pr-records';
import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { PRConstant } from '@/constant/PR';

export interface IModalProps {
  pr: IPRRecords;
  onClose: () => void;
}

const Modal = ({ pr, onClose }: IModalProps) => {
  const [content, setContent] = useState<string>('');
  const [solution, setSolution] = useState<string | undefined>('');

  const { data: PRContent } = GetPRContent(pr.id);
  const { mutate: PRContentMutation } = PatchPRContent(pr.id);
  const [attachmentUrls, setAttachmentUrls] = useState<string[]>([]);

  useEffect(() => {
    if (PRContent) {
      setContent(PRContent.content);
      setSolution(PRContent?.solution);
      setAttachmentUrls(PRContent.attachmentUrls);
    }
  }, [PRContent]);

  const onPatch = () => {
    PRContentMutation({ ...pr, content, solution, attachmentUrls });
  };

  return (
    <_.ModalBackground>
      <_.PRModalWrapper>
        <_.ModalHeaderWrapper>
          <HStack gap={30}>
            <_.ModalLabel>{pr.title}</_.ModalLabel>
            <_.TypeBox>{PRConstant[pr.type].typeName}</_.TypeBox>
          </HStack>
          <DeleteIcon cursor={'pointer'} onClick={onClose} />
        </_.ModalHeaderWrapper>
        <_.ModalMainWrapper>
          <TextAreaInput
            isAddImage={true}
            isMapImage={pr.type !== 'BUG_FIX'}
            images={attachmentUrls}
            setImages={setAttachmentUrls}
            value={content}
            setValue={(e) => setContent(e)}
            onChange={(e) => setContent(e.target.value)}
            label={PRConstant[pr.type].label[0]}
          />
          {pr.type === 'BUG_FIX' && solution && (
            <TextAreaInput
              isAddImage={true}
              isMapImage={true}
              images={attachmentUrls}
              setImages={setAttachmentUrls}
              value={solution}
              setValue={(e) => setContent(e)}
              onChange={(e) => setSolution(e.target.value)}
              label={PRConstant.BUG_FIX.label[1]}
            />
          )}
          <Button onClick={onPatch}>저장</Button>
        </_.ModalMainWrapper>
      </_.PRModalWrapper>
    </_.ModalBackground>
  );
};

export default Modal;
