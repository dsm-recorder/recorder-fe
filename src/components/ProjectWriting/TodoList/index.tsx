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
import { ITodoList, ITodo } from '@/api/daily-reports/type';
import { DeleteReport, PatchReport, PostAddReport } from '@/api/daily-reports';
import { useLocation } from 'react-router-dom';
import { IProject } from '@/api/projects/type';
import { useInput } from '@/hook/useInput';

const TodoList = ({ todos }: ITodoList) => {
  const [todoLists, setTodos] = useState<ITodo[]>(todos);
  const {
    form: content,
    setForm: setContent,
    onChange: onChangeContent,
  } = useInput('');
  const location = useLocation();
  const state = location.state as IProject;

  const { mutate: ReportMutation } = PostAddReport(state.id);
  const { mutate: DeleteMutation } = DeleteReport();
  const { mutate: PatchMuatation } = PatchReport();

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
    if (content.trim().length > 0) {
      setTodos([
        ...todoLists,
        {
          id: String(todoLists.length + 1),
          content,
          complete: false,
        },
      ]);
      ReportMutation({ content });
      setContent('');
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
          value={content}
          onChange={onChangeContent}
        />
        <Button onClick={addTodo}>추가</Button>
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
