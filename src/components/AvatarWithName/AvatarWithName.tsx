import { Box } from '@chakra-ui/icons';
import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

type Props = {
    src: string;
    name: string;
    login: string;
};
export const AvatarWithName = ({ src, name, login }: Props) => (
    <Flex>
        <Avatar name={name} src={src} size={{ base: 'sm', lg: 'md' }} mr={{ base: 2, xl: 3 }} />
        <Box>
            <Heading
                as='h6'
                fontSize={{ base: 'md', lg: 'lg' }}
                fontWeight={500}
                noOfLines={1}
                wordBreak='break-all'
                w='250px'
            >
                {name}
            </Heading>
            <Text as='span' fontSize={{ base: 'xs', lg: 'sm' }} color='blackAlpha.700'>
                {login}
            </Text>
        </Box>
    </Flex>
);
