import { Box } from '@chakra-ui/icons';
import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { CardTextContent } from '~/components/CardTextContent/CardTextContent';
import { MenuItemTag } from '~/components/MenuItemTag/MenuItemTag';
import { BookmarkIcon } from '~/icons/counterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/counterIcons/ReactionIcon';

type Props = {
    id: string;
    image: string;
    title: string;
    description: string;
    bookmarks: number;
    likes: number;
    category: string[];
    subcategory: string[];
};
export const SliderCard = ({
    id,
    image,
    title,
    description,
    bookmarks,
    likes,
    category,
    subcategory,
}: Props) => (
    <Box
        as={Link}
        display='flex'
        flexDir='column'
        borderRadius='8px'
        border='1px solid'
        borderColor='blackAlpha.200'
        overflow='hidden'
        w={{ base: '158px', xl: '277px', '2xl': '322px' }}
        minH={{ base: 'auto', xl: '440px', '2xl': '450px' }}
        flexShrink={0}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
        cursor='pointer'
        to={`/${category[0]}/${subcategory[0]}/${id}`}
    >
        <Box position='relative' h={{ base: '128px', xl: '230px' }} overflow='hidden'>
            <Image src={image} alt={title} p={0} w='100%' h='100%' objectFit='cover' maxH='230px' />
        </Box>
        <Flex
            p={{ base: '8px 8px 4px 8px', xl: '12px', '2xl': '16px 24px 20px 24px' }}
            flexGrow={1}
            direction='column'
            justifyContent='space-between'
        >
            <CardTextContent title={title} description={description} />
            <Flex justify={{ base: 'flex-start', xl: 'flex-end' }} alignItems='flex-end'>
                <Flex
                    direction='column'
                    gap={2}
                    pos={{ base: 'absolute' }}
                    top={{ base: 2, xl: 'auto' }}
                    bottom={{ base: 'auto', xl: 3, '2xl': 5 }}
                    left={{ base: 2, xl: 3, '2xl': 6 }}
                >
                    {category.map((c, index) => (
                        <MenuItemTag key={index} category={c} bgColor='lime.150' />
                    ))}
                </Flex>
                <Flex gap={2}>
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
        </Flex>
    </Box>
);
