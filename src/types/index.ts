export type ColorType =
  | 'brownSurface'
  | 'brown'
  | 'greenSurface'
  | 'green'
  | 'red'
  | 'blue';

export type InputType =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | React.MouseEvent<HTMLInputElement, MouseEvent>;
