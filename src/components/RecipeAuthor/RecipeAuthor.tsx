import { Box } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';

import FriendsIcon from '~/icons/counterIcons/FriendsIcon';
import { SubscribeIcon } from '~/icons/SubscribeIcon';

import { ActionCounter } from '../ActionCounter/ActionCounter';

type Props = {
    src: string;
    name: string;
    login: string;
};
export const RecipeAuthor = ({ src, name, login }: Props) => (
    <Flex
        gap={{ base: 2, md: 4 }}
        p={{ base: 3, md: 6 }}
        bg='lime.300'
        pos='relative'
        mt={{ base: 6, xl: 10 }}
        mb={{ base: 10, xl: 14 }}
        borderRadius='8px'
    >
        <Avatar name={name} src={src} size='xl' />
        <Flex
            direction='column'
            flexGrow={1}
            justifyContent='space-between'
            pt={{ base: 2, md: 0 }}
        >
            <Box>
                <Heading
                    as='h6'
                    fontSize={{ base: 'lg', md: '2xl' }}
                    fontWeight={{ base: 600, md: 700 }}
                    noOfLines={1}
                    wordBreak='break-all'
                >
                    {name}
                </Heading>
                <Text as='span' fontSize='sm' color='blackAlpha.700'>
                    {login}
                </Text>
            </Box>
            <Flex justifyContent='space-between'>
                <Button
                    size='xs'
                    bg='black'
                    _hover={{ bg: 'black' }}
                    color='white'
                    leftIcon={<SubscribeIcon />}
                >
                    Подписаться
                </Button>
                <ActionCounter countClick={125} icon={FriendsIcon} spacing='6px' padding='4px' />
            </Flex>
        </Flex>
        <Text
            as='span'
            pos='absolute'
            top={{ base: 2, md: 6 }}
            right={{ base: 2, md: 6 }}
            fontSize={{ base: 'xs', md: 'sm' }}
        >
            Автор рецепта
        </Text>
    </Flex>
);
