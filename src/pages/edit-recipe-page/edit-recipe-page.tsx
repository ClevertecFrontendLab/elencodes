import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { RecipeForm } from '~/components/widgets/recipe-form/recipe-form.tsx';
import { useGetRecipeByIdQuery } from '~/query/services/recipes/recipes-api.ts';
import { transformRecipeToFormData } from '~/utils/transform-recipe-to-form-data.ts';

export const EditRecipePage = () => {
    const { id } = useParams();
    const { data: recipe, isLoading } = useGetRecipeByIdQuery(id!);

    if (isLoading || !recipe) return null;

    const transformed = transformRecipeToFormData(recipe);

    return (
        <Container w='100%' maxW='100%' py={{ base: 4, md: '50px' }} px={0} mb={4}>
            <RecipeForm initialData={transformed} recipeId={id} mode='edit' />
        </Container>
    );
};
