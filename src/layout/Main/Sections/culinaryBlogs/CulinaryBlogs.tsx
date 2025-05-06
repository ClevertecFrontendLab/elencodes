import { Box } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

import { CulinaryBlogItem } from '~/components/CulinaryBlogItem/CulinaryBlogItem';
import { culinaryBlogsData } from '~/data/homePage/culinaryBlogsData.ts';
import ButtonArrowRightIcon from '~/icons/buttonIcons/buttonArrowRightIcon';

import {
    culinaryBlogsButtonStyles,
    culinaryBlogsCardsBoxStyles,
    culinaryBlogsSectionStyles,
    culinaryBlogsTitleStyles,
    culinaryBlogsWrapperStyles,
} from './culinaryBlogs.styles';

export const CulinaryBlogs = () => (
    <Box as='article' sx={culinaryBlogsWrapperStyles}>
        <Flex sx={culinaryBlogsSectionStyles}>
            <Heading as='h2' sx={culinaryBlogsTitleStyles}>
                Кулинарные блоги
            </Heading>
            <Button
                rightIcon={<ButtonArrowRightIcon boxSize='16px' color='black' />}
                sx={culinaryBlogsButtonStyles}
            >
                Все авторы
            </Button>
        </Flex>
        <Flex sx={culinaryBlogsCardsBoxStyles}>
            {culinaryBlogsData.map((u) => (
                <CulinaryBlogItem key={u.id} {...u} />
            ))}
        </Flex>
    </Box>
);
