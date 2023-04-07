import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'> & {
    reverse?: boolean,
}

export const HStack = ({ reverse, children, ...props }: HStackProps) => (
    <Flex {...props} direction={reverse ? 'row-reverse' : 'row'}>
        {children}
    </Flex>
);
