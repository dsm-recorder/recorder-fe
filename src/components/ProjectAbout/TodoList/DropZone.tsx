import { useDrop } from 'react-dnd';
import * as Common from '../Common/style';
import * as _ from './style';

interface DropZoneProps {
  title: string;
  accept: string;
  onDrop: (item: any) => void;
  children: React.ReactNode;
}

function DropZone({ title, accept, onDrop, children }: DropZoneProps) {
  const [___, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <_.TodoWrapper ref={drop}>
      <Common.Label style={{ color: 'white' }}>{title}</Common.Label>
      <_.TodoScroll>{children}</_.TodoScroll>
    </_.TodoWrapper>
  );
}

export default DropZone;
