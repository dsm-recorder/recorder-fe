import { IPRRecordsType, PRType } from '@/api/pr-records/type';
import { FeatModal } from './FeatModal';

interface ModalPropsType {
  pr: IPRRecordsType | null;
  onClose: () => void;
}

const Modal = ({ pr, onClose }: ModalPropsType) => {
  const PRMoalSwitch = () => {
    if (pr) {
      switch (pr.type) {
        case PRType.NEW_FEATURE:
          return <FeatModal title={pr.title} onClick={onClose} />;
          break;
        case PRType.BUG_FIX:
          return <div>123</div>;
          break;
        case PRType.REFACTORING:
          return <div>123</div>;
          break;
        default:
          return <div>123</div>;
      }
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1000,
      }}
    >
      <PRMoalSwitch />
    </div>
  );
};

export default Modal;
