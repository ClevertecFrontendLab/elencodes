import { Grid } from '@chakra-ui/react';

import { RecipeCardHorizontal } from '~/components';
import { FOOD_CARD } from '~/constants/data-test-ids';
import { Recipe } from '~/query/services/recipes/types.ts';

type ResponsiveRecipeGridProps = {
    recipes: Recipe[];
};

export const ResponsiveRecipeGrid = ({ recipes }: ResponsiveRecipeGridProps) => (
    <Grid
        templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: '1fr',
            xl: 'repeat(2, 1fr)',
        }}
        gap={6}
        width='100%'
        maxW='100%'
        autoRows='1fr'
    >
        {recipes.map((recipe, index) => (
            <RecipeCardHorizontal
                dataTestId={`${FOOD_CARD}${index}`}
                key={recipe._id + index}
                recipe={recipe}
                index={index}
            />
        ))}
    </Grid>
);
