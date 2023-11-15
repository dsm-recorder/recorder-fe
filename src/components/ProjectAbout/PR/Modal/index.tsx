import { IPRRecordsType, PRType } from '@/api/pr-records/type';
import * as _ from './Modal.style'
import { FeatModal } from './FeatModal';
import { BugFixModal } from './BugFixModal';
import { RefactModal } from './RefactModal';

interface ModalPropsType {
  pr: IPRRecordsType | null;
  onClose: () => void;
}

export type imageState = {
  renderer: string;
  value: File;
};

const Modal = ({ pr, onClose }: ModalPropsType) => {
  const PRMoalSwitch = () => {
    if (pr) {
      switch (pr.type) {
        case PRType.NEW_FEATURE:
          return <FeatModal {...pr} onClick={onClose} />;
        case PRType.BUG_FIX:
          return <BugFixModal {...pr} onClick={onClose} />;
        case PRType.REFACTORING:
          return <RefactModal {...pr} onClick={onClose} />;
      }
    }
  };
  return (
    <_.ModalBackground>
      <PRMoalSwitch />
    </_.ModalBackground>
  );
};

export default Modal;
