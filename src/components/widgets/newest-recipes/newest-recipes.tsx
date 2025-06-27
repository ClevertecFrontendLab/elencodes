import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

import { Carousel, RecipeCardVertical, SectionWrapper } from '~/components';
import { TOAST_MESSAGES } from '~/constants/toast-messages.ts';
import { useCustomToast } from '~/hooks/use-custom-toast.tsx';
import { NEWEST_PARAMS } from '~/query/constants/recipe-consts.ts';
import { useGetRecipesQuery } from '~/query/services/recipes/recipes-api.ts';

const { SearchErrorToast } = TOAST_MESSAGES;

export const NewestRecipes = () => {
    const { data, isError } = useGetRecipesQuery(NEWEST_PARAMS);
    const { toast } = useCustomToast();
    const carouselItems = data?.data ?? [];

    const carouselRecipes = carouselItems
        ?.slice()
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    useEffect(() => {
        if (isError) {
            toast(SearchErrorToast);
        }
    }, [isError, toast]);

    return (
        <SectionWrapper title='Новые рецепты'>
            <Box maxW='100%' minH={{ base: '220px', sm: 'unset' }}>
                <Carousel>
                    {carouselRecipes.map((recipe) => (
                        <RecipeCardVertical key={recipe._id} recipe={recipe} />
                    ))}
                </Carousel>
            </Box>
        </SectionWrapper>
    );
};
