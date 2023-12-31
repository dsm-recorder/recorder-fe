import React, { ReactNode } from 'react';
import styled from 'styled-components';

type DirectionType = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type ItemType =
  | 'start'
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type WrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

export interface StackProps {
  width?: number;
  height?: number;
  padding?: React.CSSProperties['padding'];
  direction?: DirectionType;
  align?: ItemType;
  justify?: ItemType;
  gap?: number;
  margin?: React.CSSProperties['margin'];
  wrap?: WrapType;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export const Stack = ({
  width,
  height,
  direction,
  align,
  justify,
  gap,
  margin,
  padding,
  wrap,
  children,
  style,
}: StackProps) => {
  return (
    <Container
      width={width}
      height={height}
      padding={padding}
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      wrap={wrap}
      margin={margin}
      style={style}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<StackProps>`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => height}px;
  padding: ${({ padding }) => padding};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => gap}px;
  margin: ${({ margin }) => margin};
`;
