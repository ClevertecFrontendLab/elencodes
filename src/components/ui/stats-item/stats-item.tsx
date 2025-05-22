import { HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type StatItemProps = {
    icon: ReactNode;
    value: number | string;
} & Partial<{
    fontSize: string;
    lineHeight: number | string;
    color: string;
}>;

export const StatItem = ({
    icon,
    value,
    fontSize = 'md',
    lineHeight = 6,
    color = 'lime.600',
}: StatItemProps) => (
    <HStack pr={2}>
        {icon}
        <Text
            fontWeight='600'
            fontSize={{ base: 'xs', md: fontSize }}
            lineHeight={lineHeight}
            color={color}
        >
            {value}
        </Text>
    </HStack>
);
