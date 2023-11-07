import { Stack, StackProps } from './Stack';

export const VStack = ({ width, height, align, justify, gap, margin, children, padding }: StackProps) => {
    return (
        <Stack
            direction='column'
            width={width}
            height={height}
            align={align}
            justify={justify}
            gap={gap}
            padding={padding}
            margin={margin}>
            {children}
        </Stack>
    );
};
