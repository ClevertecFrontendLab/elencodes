import { Flex } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, HStack, Image, Text } from '@chakra-ui/react';

import { StatItem } from '~/components';
import { SubscribeIcon } from '~/icons/button-icons/subscribe-icon';
import { FriendsIcon } from '~/icons/counter-icons/friends-icon';

import author from '../../../assets/images/avatars/recipe_author.svg';

export const RecipeAuthorCard = () => (
    <Box w={{ base: '100%', sm: '604px', md: '680px' }}>
        <Card
            direction='row'
            align='center'
            overflow='hidden'
            bgColor='lime.300'
            p={{ base: 3, sm: 6 }}
        >
            <Box position='relative' maxW={{ base: '158px', md: '50%' }}>
                <Image
                    src={author}
                    alt='Автор рецепта Сергей Разумов'
                    rounded='full'
                    w='100%'
                    h='auto'
                />
            </Box>
            <CardBody
                w='100%'
                display='flex'
                flexDirection='column'
                py={0}
                pr={0}
                pl={{ base: 2, sm: 4 }}
            >
                <Flex
                    direction={{ base: 'column-reverse', sm: 'row' }}
                    justifyContent='space-between'
                >
                    <Text fontSize={{ base: 'lg', sm: '2xl' }} fontWeight='600'>
                        Сергей Разумов
                    </Text>
                    <Text fontSize={{ base: 'xs', sm: 'sm' }} align='right'>
                        Автор рецепта
                    </Text>
                </Flex>
                <Text fontSize='sm' color='blackAlpha.700'>
                    @serge25
                </Text>
                <HStack mt='16px' justify='space-between'>
                    <Button
                        size='xs'
                        variant='solid'
                        bg='black'
                        color='white'
                        leftIcon={<SubscribeIcon />}
                    >
                        Подписаться
                    </Button>
                    <StatItem icon={<FriendsIcon w='14px' h='14px' />} value={125} fontSize='sm' />
                </HStack>
            </CardBody>
        </Card>
    </Box>
);
