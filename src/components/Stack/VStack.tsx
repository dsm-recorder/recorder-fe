import { Stack, StackProps } from './Stack';

export const VStack = ({
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
      direction='column'
      width={width}
      height={height}
      align={align}
      justify={justify}
      gap={gap}
      wrap={wrap}
      style={style}
      margin={margin}
    >
      {children}
    </Stack>
  );
};
