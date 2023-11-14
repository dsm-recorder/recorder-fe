export interface TodoType {
  id: string;
  content: string;
  complete: boolean;
};

export interface TodoListType {
  todos: TodoType[];
};
