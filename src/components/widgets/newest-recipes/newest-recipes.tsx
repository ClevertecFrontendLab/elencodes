import { Box } from '@chakra-ui/react';

import { Carousel, RecipeCardVertical, SectionWrapper } from '~/components';
import { NEWEST_PARAMS } from '~/query/constants/recipe-consts.ts';
import { useGetRecipesQuery } from '~/query/services/recipes/recipes-api.ts';

export const NewestRecipes = () => {
    const { data } = useGetRecipesQuery(NEWEST_PARAMS);
    const carouselItems = data?.data ?? [];

    const carouselRecipes = carouselItems
        ?.slice()
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return (
        <SectionWrapper title='Новые рецепты'>
            <Box maxW='100%' overflow='hidden' minH={{ base: '220px', sm: 'unset' }}>
                <Carousel>
                    {carouselRecipes.map((recipe) => (
                        <RecipeCardVertical key={recipe._id} recipe={recipe} />
                    ))}
                </Carousel>
            </Box>
        </SectionWrapper>
    );
};
