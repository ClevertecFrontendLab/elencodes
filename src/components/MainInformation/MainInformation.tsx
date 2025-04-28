import { Box } from '@chakra-ui/icons';
import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { ClockIcon } from '~/icons/ClockIcon';
import { BookmarkIcon } from '~/icons/counterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/counterIcons/ReactionIcon';

import { ActionCounter } from '../ActionCounter/ActionCounter';
import { MenuItemTag } from '../MenuItemTag/MenuItemTag';

type Props = {
    title: string;
    description: string;
    category: string[];
    image: string;
    bookmarks: number;
    likes: number;
    time: string;
};
export const MainInformation = (props: Props) => {
    const { title, description, category, image, bookmarks, likes, time } = props;
    return (
        <Flex
            gap={{ base: 4, xl: 6 }}
            pt={{ base: 4, xl: 14 }}
            direction={{ base: 'column', md: 'row' }}
        >
            <Image
                src={image}
                alt={title}
                objectFit='cover'
                borderRadius='8px'
                w={{ base: '100%', md: '232px', xl: '353px', '2xl': '553px' }}
                h={{ base: '224px', md: '224px', xl: '410px' }}
            />
            <Flex direction='column' flexGrow={1}>
                <Flex
                    justifyContent='space-between'
                    alignItems='flex-start'
                    gap={{ base: 2, '2xl': 4 }}
                >
                    <Flex gap={{ base: 2, '2xl': 4 }} wrap='wrap'>
                        {category.map((el) => (
                            <MenuItemTag key={el} category={el} bgColor='lime.50' />
                        ))}
                    </Flex>
                    <Flex gap='8px'>
                        {bookmarks && (
                            <ActionCounter
                                icon={BookmarkIcon}
                                countClick={bookmarks}
                                spacing={{ base: '6px', '2xl': '8px' }}
                                padding={{ base: '4px', '2xl': '6px 12px' }}
                                boxSize={{ base: '12px', '2xl': '14px' }}
                                fontSize={{ base: 'xs', '2xl': 'sm' }}
                            />
                        )}
                        {likes && (
                            <ActionCounter
                                icon={ReactionIcon}
                                countClick={likes}
                                spacing={{ base: '6px', '2xl': '8px' }}
                                padding={{ base: '4px', '2xl': '6px 12px' }}
                                boxSize={{ base: '12px', '2xl': '14px' }}
                                fontSize={{ base: 'xs', '2xl': 'sm' }}
                            />
                        )}
                    </Flex>
                </Flex>
                <Heading
                    as='h2'
                    fontWeight={700}
                    fontSize={{ base: '2xl', xl: '5xl' }}
                    mb={{ base: 4, xl: 6 }}
                    mt='32px'
                    maxWidth={{ base: '100%', md: '437px' }}
                >
                    {title}
                </Heading>
                <Text fontSize='sm' maxWidth={{ base: '100%', '2xl': '528px' }} flexGrow={1}>
                    {description}
                </Text>
                <Flex
                    mt='24px'
                    gap='12px'
                    alignItems={{ base: 'flex-start', md: 'flex-end' }}
                    justifyContent='space-between'
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Box bg='blackAlpha.100' px={2} borderRadius='4px' h='24px'>
                        <ClockIcon />
                        <Text as='span' fontSize='sm' ml={2}>
                            {time}
                        </Text>
                    </Box>
                    <Flex
                        justify={{ base: 'flex-start', md: 'flex-end' }}
                        gap={{ base: '12px', '2xl': '16px' }}
                    >
                        <Button
                            colorScheme='black'
                            _hover={{ bg: 'lime.50' }}
                            size={{ base: 'xs', xl: 'sm', '2xl': 'lg' }}
                            variant='outline'
                            leftIcon={
                                <ReactionIcon
                                    boxSize={{ base: '12px', xl: '14px', '2xl': '16px' }}
                                />
                            }
                        >
                            Оценить рецепт
                        </Button>
                        <Button
                            bg='lime.400'
                            _hover={{ bg: 'lime.50' }}
                            size={{ base: 'xs', xl: 'sm', '2xl': 'lg' }}
                            leftIcon={
                                <BookmarkIcon
                                    boxSize={{ base: '12px', xl: '14px', '2xl': '16px' }}
                                />
                            }
                        >
                            Сохранить в закладки
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
