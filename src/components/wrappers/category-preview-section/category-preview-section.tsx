import { Divider } from '@chakra-ui/icons';
import { Box, Flex, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { RecipeCardVertical, RecipeListItem } from '~/components';
import {
    INITIAL_PAGE_NUM,
    RANDOM_CATEGORY_RECIPES_LIMIT,
} from '~/query/constants/recipe-consts.ts';
import { useGetRecipeByCategoryQuery } from '~/query/services/recipes/recipes-api.ts';
import { useAppSelector } from '~/redux/hooks.ts';
import { selectCategories } from '~/redux/slices/category-slice.ts';
import { getRandomCategory } from '~/utils/get-random-category.ts';

const RANDOM_CATEGORY_BIG_CARD_START = 0;
const RANDOM_CATEGORY_BIG_CARD_END = 2;
const RANDOM_CATEGORY_SMALL_CARD_START = 2;
const RANDOM_CATEGORY_SMALL_CARD_END = 5;

export const CategoryPreviewSection = () => {
    const categories = useAppSelector(selectCategories);
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState(() => getRandomCategory(categories));

    useEffect(() => {
        setSelectedCategory(getRandomCategory(categories));
    }, [location.pathname, categories]);

    const { title, description, firstSubCategoryId } = selectedCategory || {};

    const { data } = useGetRecipeByCategoryQuery(
        {
            id: firstSubCategoryId,
            limit: RANDOM_CATEGORY_RECIPES_LIMIT,
            page: INITIAL_PAGE_NUM,
        },
        {
            skip: !firstSubCategoryId,
        },
    );

    const randomCategoryRecipes = data?.data ?? [];
    const firstRecipes = randomCategoryRecipes.slice(
        RANDOM_CATEGORY_BIG_CARD_START,
        RANDOM_CATEGORY_BIG_CARD_END,
    );
    const lastRecipes = randomCategoryRecipes.slice(
        RANDOM_CATEGORY_SMALL_CARD_START,
        RANDOM_CATEGORY_SMALL_CARD_END,
    );

    return (
        <Box mt={8}>
            <Divider />
            <Flex
                w='100%'
                my={{ base: 2, md: 6 }}
                gap={4}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={{ base: 'start', md: 'center' }}
                justifyContent='start'
            >
                <Heading flex={1} fontWeight='500' fontSize={{ md: '48px', base: '24px' }} mb={2}>
                    {title}
                </Heading>
                {description && (
                    <Text
                        flex={{ md: 2, xl: 1 }}
                        color='blackAlpha.700'
                        pr={15}
                        pl={{ base: 0, md: 10 }}
                        fontSize={{ base: 'sm', md: 'md' }}
                    >
                        {description}
                    </Text>
                )}
            </Flex>
            <Grid
                maxW='100%'
                templateColumns={{ base: '1fr', sm: 'max-content max-content auto' }}
                gap={{ base: 3, md: 4 }}
                alignItems={{ lg: 'start' }}
            >
                {firstRecipes.map((recipe) => (
                    <RecipeCardVertical key={recipe.title} recipe={recipe} isWithoutImage />
                ))}
                <VStack justify='space-between' h='100%'>
                    {lastRecipes.map((recipe) => (
                        <RecipeListItem key={recipe._id} recipe={recipe} />
                    ))}
                </VStack>
            </Grid>
        </Box>
    );
};
