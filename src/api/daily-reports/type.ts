export interface ITodo {
  id: string;
  content: string;
  complete: boolean;
};

export interface ITodoList {
  todos: ITodo[];
};
