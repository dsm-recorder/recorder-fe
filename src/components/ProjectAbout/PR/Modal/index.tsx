import { IPRRecordsType, PRType } from '@/api/pr-records/type';
import * as _ from './Modal.style'
import { FeatModal } from './FeatModal';
import { BugFixModal } from './BugFixModal';
import { RefactModal } from './RefactModal';

export interface ModalPropsType {
  pr: IPRRecordsType;
  onClose: () => void;
}

export interface imageState {
  renderer: string;
  value: File;
};

const Modal = ({ pr, onClose }: ModalPropsType) => {
  const PRMoalSwitch = () => {
    if (pr) {
      switch (pr.type) {
        case PRType.NEW_FEATURE:
          return <FeatModal pr={pr} onClose={onClose} />;
        case PRType.BUG_FIX:
          return <BugFixModal pr={pr} onClose={onClose} />;
        case PRType.REFACTORING:
          return <RefactModal pr={pr} onClose={onClose} />;
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
