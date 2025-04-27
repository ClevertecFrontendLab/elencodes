import { Box, CardBody, Show } from '@chakra-ui/icons';
import { Button, Card, Flex, Image, Stack } from '@chakra-ui/react';
import { Link } from 'react-router';

import { BookmarkIcon } from '~/icons/counterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/counterIcons/ReactionIcon';
import { resetFilters } from '~/model/filterSlice.ts';
import { useAppDispatch } from '~/store/hooks.ts';

import { ActionCounter } from '../ActionCounter/ActionCounter';
import { CardTextContent } from '../CardTextContent/CardTextContent';
import { MenuItemTag } from '../MenuItemTag/MenuItemTag';

type Props = {
    id: string;
    image: string;
    title: string;
    description: string;
    bookmarks: number;
    likes: number;
    category: string[];
    subcategory: string[];
    index: number;
};
export const MainCard = ({
    id,
    image,
    title,
    description,
    bookmarks,
    likes,
    category,
    subcategory,
    index,
}: Props) => {
    const dispatch = useAppDispatch();

    return (
        <Card
            data-test-id={`food-card-${index}`}
            shadow='none'
            borderRadius='8px'
            border='1px solid'
            borderColor='blackAlpha.200'
            display='flex'
            flexDirection='row'
            overflow='hidden'
            position='relative'
            minH={{ xl: '244px' }}
            maxH={{ xl: '260px' }}
            flex={{
                base: '0 0 100%',
                md: '0 0 calc(50% - 8px)',
                xl: '0 0 100%',
                '2xl': '0 0 calc(50% - 12px)',
            }}
            minW={0}
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <Box
                flexShrink={0}
                w={{ base: '158px', xl: '346px' }}
                h={{ base: '128px', xl: '100%' }}
                minH={{ xl: '244px' }} // Соответствует высоте карточки
                position='relative'
                overflow='hidden'
            >
                <Image src={image} alt={title} w='100%' h='100%' objectFit='cover' />

                <Show below='xl'>
                    <Flex direction='column' gap={2} position='absolute' top={2} left={2}>
                        {category.map((c, idx) => (
                            <MenuItemTag key={idx} category={c} bgColor='lime.50' />
                        ))}
                    </Flex>
                </Show>
            </Box>

            <CardBody
                p={{ base: '8px 8px 4px 8px', xl: '12px', '2xl': '16px 24px 20px 24px' }}
                display='flex'
                flexDirection='column'
                flex='1'
            >
                <Stack spacing={{ base: 2, xl: 6 }} flex='1' justifyContent='space-between'>
                    <Show above='xl'>
                        <Flex justify='space-between' alignItems='flex-start'>
                            <Flex direction='row' wrap='wrap' gap={2}>
                                {category.map((c, idx) => (
                                    <MenuItemTag key={idx} category={c} bgColor='lime.50' />
                                ))}
                            </Flex>

                            <Flex gap='8px'>
                                {bookmarks && (
                                    <ActionCounter
                                        icon={BookmarkIcon}
                                        countClick={bookmarks}
                                        spacing='6px'
                                        padding='4px'
                                    />
                                )}
                                {likes && (
                                    <ActionCounter
                                        icon={ReactionIcon}
                                        countClick={likes}
                                        spacing='6px'
                                        padding='4px'
                                    />
                                )}
                            </Flex>
                        </Flex>
                    </Show>

                    <CardTextContent title={title} description={description} />

                    <Flex
                        justify='flex-end'
                        gap={{ base: '12px', xl: '8px' }}
                        mt={{ base: 0, xl: 'auto' }}
                    >
                        <Button
                            colorScheme='black'
                            size={{ base: 'xs', xl: 'sm' }}
                            sx={{ '& span': { marginRight: { base: 0, xl: 2 } } }}
                            variant='outline'
                            leftIcon={<BookmarkIcon />}
                        >
                            <Show above='xl'>Сохранить</Show>
                        </Button>
                        <Button
                            data-test-id={`card-link-${index}`}
                            as={Link}
                            onClick={() => dispatch(resetFilters())}
                            bg='black'
                            _hover={{ bg: 'black' }}
                            color='white'
                            size={{ base: 'xs', xl: 'sm' }}
                            to={`/${category[0]}/${subcategory[0]}/${id}`}
                        >
                            Готовить
                        </Button>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    );
};
