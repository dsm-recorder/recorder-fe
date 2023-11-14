import { useDrag } from 'react-dnd';
import * as _ from './style';
import { TrashIcon } from '@/asset/icon/TrashIcon';
import { TodoType } from '@/api/daily-reports/type';

interface TodoCardPropsType extends TodoType {
  onClick: () => void;
}

const DraggableTodo = ({
  id,
  content,
  complete,
  onClick,
}: TodoCardPropsType) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'todo',
    item: { id, content, complete },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <_.TodoCardWrapper ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {content}
      <TrashIcon onClick={onClick} />
    </_.TodoCardWrapper>
  );
};

export default DraggableTodo;
