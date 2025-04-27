import { Box } from '@chakra-ui/icons';
import { useParams } from 'react-router';

import { CookingSteps } from '~/components/CookingSteps/CookingSteps';
import { Ingredients } from '~/components/Ingredients/Ingredients';
import { MainInformation } from '~/components/MainInformation/MainInformation';
import { NutritionValue } from '~/components/NutritionValue/NutritionValue';
import { RecipeAuthor } from '~/components/RecipeAuthor/RecipeAuthor';
import { Slider } from '~/components/Slider/Slider';
import { selectAllRecipes } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

import author from '../../assets/images//avatars/recipe_author.svg';

export const RecipesPage = () => {
    const { id } = useParams<{ id: string }>();
    const recipes = useAppSelector(selectAllRecipes);
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) {
        return <Box>Рецепт не найден</Box>;
    }

    return (
        <Box mb={{ base: 12, xl: 6 }}>
            <MainInformation
                category={recipe.category}
                bookmarks={recipe.bookmarks}
                likes={recipe.likes}
                image={recipe.image}
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
            />
            <Box maxW={{ base: '100%', md: '604px', xl: '578px', '2xl': '668px' }} m='0 auto'>
                <NutritionValue nutritionValue={recipe.nutritionValue} />
                <Ingredients ingredients={recipe.ingredients} portions={recipe.portions} />
                <CookingSteps steps={recipe.steps} />
                <RecipeAuthor src={author} name='Сергей Разумов' login='@serge25' />
            </Box>
            <Slider />
        </Box>
    );
};
