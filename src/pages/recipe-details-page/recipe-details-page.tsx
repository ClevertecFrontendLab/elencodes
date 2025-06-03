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
import { TOAST_MESSAGES } from '~/constants/toast-messages.ts';
import { useCustomToast } from '~/hooks/use-custom-toast.tsx';
import { useScreenSize } from '~/hooks/use-screen-size.tsx';
import { useGetRecipeByIdQuery } from '~/query/services/recipes/recipes-api.ts';
import { useAppSelector } from '~/redux/hooks.ts';
import { selectUserId } from '~/redux/slices/auth-slice.ts';

const { SearchErrorToast } = TOAST_MESSAGES;

export const RecipeDetailsPage = () => {
    const { isTablet } = useScreenSize();
    const { toast } = useCustomToast();
    const recipeId = useParams().id;
    const navigate = useNavigate();
    const { data: foundRecipe, isError } = useGetRecipeByIdQuery(recipeId || '', {
        skip: !recipeId,
    });
    const userId = useAppSelector(selectUserId);
    const isOwnRecipe = foundRecipe?.authorId === userId;
    const shouldShowAuthorCard = !isOwnRecipe;

    useEffect(() => {
        if (isError) {
            navigate(-1);
            toast(SearchErrorToast);
        }
    }, [isError, navigate, toast]);

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
            <RecipeImageBlock recipe={foundRecipe} isTablet={isTablet} isAuthor={isOwnRecipe} />
            <NutritionStats nutritionValue={foundRecipe.nutritionValue} />
            <IngredientsTable
                ingredients={foundRecipe.ingredients}
                portions={foundRecipe.portions}
            />
            <RecipeStepsSection steps={foundRecipe.steps} />
            {shouldShowAuthorCard && <RecipeAuthorCard />}
            <NewestRecipes />
        </Container>
    );
};
