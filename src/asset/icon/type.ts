export interface IIconType {
  cursor?: React.CSSProperties['cursor'];
  size?: number;
  color?: string;
  onClick?: () => void;
  isClicked?: boolean;
}
