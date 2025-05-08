import { Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
    IngredientsTable,
    NewestRecipes,
    NutritionStats,
    RecipeAuthorCard,
    RecipeImageBlock,
    RecipeStepsSection,
} from '~/components';
import { useScreenSize } from '~/hooks/use-screen-size.tsx';
import { useGetRecipeByIdQuery } from '~/query/services/recipes/recipes-api.ts';

export const RecipeDetailsPage = () => {
    const { isTablet } = useScreenSize();
    const recipeId = useParams().id;
    const navigate = useNavigate();
    const { data: foundRecipe, isError } = useGetRecipeByIdQuery(recipeId || '', {
        skip: !recipeId,
    });

    useEffect(() => {
        if (isError) {
            navigate(-1);
        }
    }, [isError, navigate]);

    if (!foundRecipe) return null;

    return (
        <Container
            gap={{ base: 6, md: 10 }}
            w='100%'
            maxW='100%'
            py={{ base: 4, md: '56px' }}
            px={0}
            mb={4}
            centerContent
        >
            <RecipeImageBlock recipe={foundRecipe} isTablet={isTablet} />
            <NutritionStats nutritionValue={foundRecipe.nutritionValue} />
            <IngredientsTable
                ingredients={foundRecipe.ingredients}
                portions={foundRecipe.portions}
            />
            <RecipeStepsSection steps={foundRecipe.steps} />
            <RecipeAuthorCard />
            <NewestRecipes />
        </Container>
    );
};
