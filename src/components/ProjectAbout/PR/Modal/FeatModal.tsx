import { DeleteIcon } from '@/asset/icon';
import * as _ from './Modal.style';

export const FeatModal = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => {
  return (
    <_.PRModalWrapper>
      <_.ModalHeaderWrapper>
        <_.ModalTitle>{title}</_.ModalTitle>
        <_.Right>
          <_.TypeBox>기능 추가</_.TypeBox>
          <DeleteIcon onClick={onClick} />
        </_.Right>
      </_.ModalHeaderWrapper>
    </_.PRModalWrapper>
  );
};
