import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { HStack } from '@/components/Stack';
import * as Common from '../Common/style';
import * as _ from './style';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import DropZone from './DropZone';
import DraggableTodo from './DropCard';
import { TodoListType, TodoType } from '@/api/daily-reports/type';
import {
  DeleteReport,
  PatchReport,
  PostAddReport,
} from '@/api/daily-reports';
import { useLocation } from 'react-router-dom';
import { ProjectType } from '@/api/projects/type';

const TodoList = ({ todos }: TodoListType) => {
  const [todoLists, setTodos] = useState<TodoType[]>(todos);
  const [value, setValue] = useState<string>('');

  const location = useLocation();
  const state = location.state as ProjectType;

  const { mutate: ReportMutation } = PostAddReport(
    state.id
  );
  const { mutate: DeleteMutation } = DeleteReport();
  const { mutate: PatchMuatation } = PatchReport(
    state.id
  );

  useEffect(() => {
    setTodos(todos);
  }, [todos]);

  const handleDrop =
    (completed: boolean) =>
    ({ id }: { id: string }) => {
      const originalTodo = todoLists.find((todo) => todo.id === id);
      if (originalTodo && originalTodo.complete !== completed) {
        PatchMuatation(id);
        setTodos(
          todoLists.map((todo) =>
            todo.id === id ? { ...todo, complete: completed } : todo
          )
        );
      }
    };

  const addTodo = () => {
    if (value.trim().length > 0) {
      setTodos([
        ...todoLists,
        {
          id: String(todoLists.length + 1),
          content: value,
          complete: false,
        },
      ]);
      ReportMutation({ content: value });
      setValue('');
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((e) => e.id !== id));
    DeleteMutation(id);
  };

  return (
    <Common.ContentWrapper>
      <Common.Label>일일보고</Common.Label>
      <HStack gap={30} align='end'>
        <Input
          placeholder='해야 할 일을 입력해주세요'
          width='100%'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => addTodo()}>추가</Button>
      </HStack>
      <HStack gap={60}>
        <DndProvider backend={HTML5Backend}>
          <DropZone title='Todo' accept='todo' onDrop={handleDrop(false)}>
            {todoLists
              .filter((todo) => !todo.complete)
              .map((todo, index) => (
                <DraggableTodo
                  key={index}
                  onClick={() => deleteTodo(todo.id)}
                  {...todo}
                />
              ))}
          </DropZone>
          <DropZone title='Done' accept='todo' onDrop={handleDrop(true)}>
            {todoLists
              .filter((todo) => todo.complete)
              .map((todo, index) => (
                <DraggableTodo
                  key={index}
                  onClick={() => deleteTodo(todo.id)}
                  {...todo}
                />
              ))}
          </DropZone>
        </DndProvider>
      </HStack>
    </Common.ContentWrapper>
  );
};

export default TodoList;