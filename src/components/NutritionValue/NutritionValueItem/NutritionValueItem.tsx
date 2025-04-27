import { Flex, Heading, Text } from '@chakra-ui/react';

type Props = {
    title: string;
    value: number;
    measureUnit: string;
};
export const NutritionValueItem = ({ title, value, measureUnit }: Props) => (
    <Flex
        direction={{ base: 'row', md: 'column' }}
        justify='space-between'
        alignItems='center'
        p={{ base: '16px 12px', md: '16px' }}
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius={16}
        w={{ base: '100%', md: '173px', xl: '135px', xxl: '149px' }}
    >
        <Heading
            as='h4'
            color='blackAlpha.600'
            fontWeight={400}
            fontSize='sm'
            w={{ base: '117px', md: 'auto' }}
        >
            {title}
        </Heading>
        <Text
            as='span'
            color='lime.800'
            fontWeight={500}
            fontSize={{ base: '2xl', md: '4xl' }}
            width={{ base: '117px', md: 'auto' }}
            textAlign='center'
            p={{ base: '16px 12px', md: '16px' }}
        >
            {value}
        </Text>
        <Text
            as='span'
            color='blackAlpha.900'
            fontWeight={600}
            fontSize={{ base: 'xs', md: 'sm' }}
            w={{ base: '61px', md: 'auto' }}
        >
            {measureUnit}
        </Text>
    </Flex>
);
