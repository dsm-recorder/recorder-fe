import { Stack, StackProps } from './Stack';

export const HStack = ({
  width,
  height,
  align,
  justify,
  gap,
  wrap,
  style,
  margin,
  children,
}: StackProps) => {
  return (
    <Stack
      direction='row'
      width={width}
      height={height}
      align={align}
      justify={justify}
      wrap={wrap}
      style={style}
      gap={gap}
      margin={margin}
    >
      {children}
    </Stack>
  );
};
