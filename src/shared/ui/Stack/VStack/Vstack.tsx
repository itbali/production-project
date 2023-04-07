import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'> & {
    reverse?: boolean,
}

export const VStack = ({ reverse, children, ...props }: VStackProps) => (
    <Flex {...props} direction={reverse ? 'column-reverse' : 'column'}>
        {children}
    </Flex>
);
