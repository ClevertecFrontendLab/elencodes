import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { TitleSectionWithButton } from '~/components/Buttons/TitleSectionWithButton/TitleSectionWithButton';
import { SearchingContent } from '~/components/SearchingContent/SearchingContent';
import { DATA_TEST_ID } from '~/constants/test-id';
import { veganCuisineData } from '~/data/homePage/veganCuisineData';
import { veganCuisineDataShort } from '~/data/homePage/veganCuisineDataShort.ts';
import { selectAllRecipes, selectCategories, selectFilters } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';
import { RecipeType } from '~/types/recipeType';

import { CulinaryBlogs } from '../layout/main/sections/culinaryBlogs/culinaryBlogs';
import { LastSection } from '../layout/main/sections/lastSection/lastSection';
import { MainSection } from '../layout/main/sections/mainSection/mainSection';
import { NewRecipesSection } from '../layout/main/sections/newRecipes/newRecipesSection';

export const HomePage = () => {
    const navigate = useNavigate();
    const filter = useAppSelector(selectFilters);
    const showTheJuciest = () => {
        navigate('/the-juiciest');
    };

    const recipes = useAppSelector(selectAllRecipes);
    const categories = useAppSelector(selectCategories);

    const [isNothingFound, setIsNothingFound] = useState(false);
    const [filteredRecipes, setFilteredRecipes] = useState<RecipeType[]>([]);

    const getFilteredRecipes = useCallback(() => {
        let result = [...recipes];

        if (filter.searchQuery) {
            result = result.filter((r) => r.title.toLowerCase().includes(filter.searchQuery));
        }
        if (filter.pageAllergenFilter.excludedAllergens.length) {
            result = result.filter(
                (recipe) =>
                    !recipe.ingredients.some((ingredient) =>
                        filter.pageAllergenFilter.excludedAllergens.some((allergen) =>
                            ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                        ),
                    ),
            );
        }
        if (filter.drawerAllergenFilter.excludedAllergens.length) {
            console.log('есть исключенный аллерген');
            result = result.filter(
                (recipe) =>
                    !recipe.ingredients.some((ingredient) =>
                        filter.drawerAllergenFilter.excludedAllergens.some((allergen) =>
                            ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                        ),
                    ),
            );
        }
        if (filter.selectedCategories.length) {
            result = result.filter((recipe) =>
                recipe.category
                    .map((category) => categories.find((c) => c.nameEn === category)?.name ?? '')
                    .some((cat) => filter.selectedCategories.includes(cat)),
            );
        }
        if (filter.selectedMeatType.length) {
            result = result.filter(
                (recipe) =>
                    recipe.meat &&
                    filter.selectedMeatType.map((i) => i.value).includes(recipe.meat),
            );
        }

        if (filter.selectedSideType.length) {
            result = result.filter(
                (recipe) =>
                    recipe.side &&
                    filter.selectedSideType.map((i) => i.value).includes(recipe.side),
            );
        }
        return result;
    }, [recipes, filter, categories]);

    useEffect(() => {
        const result = getFilteredRecipes();
        setFilteredRecipes(result);

        const hasActiveFilters =
            filter.searchQuery ||
            filter.pageAllergenFilter.excludedAllergens.length > 0 ||
            filter.drawerAllergenFilter.excludedAllergens.length > 0 ||
            filter.selectedCategories.length > 0 ||
            filter.selectedMeatType.length > 0 ||
            filter.selectedSideType.length > 0;

        setIsNothingFound(result.length === 0 && hasActiveFilters);
    }, [getFilteredRecipes, filter]);

    const sortedRecipesByLikes = [...recipes].sort((a, b) => b.likes - a.likes);

    return (
        <>
            <SearchingContent
                title='Приятного аппетита!'
                isNothingFound={isNothingFound}
                setIsNothingFound={setIsNothingFound}
            />
            {!filter.isSearchModeOnPage && (
                <>
                    <NewRecipesSection />
                    <TitleSectionWithButton onClick={showTheJuciest} />
                    <MainSection
                        buttonTitle='Вся подборка'
                        sizeButton='md'
                        displayButton={{ base: 'block', xl: 'none' }}
                        showRightIcon={true}
                        onClick={showTheJuciest}
                        dataTestId={DATA_TEST_ID.juiciestLinkMobile}
                        recipes={sortedRecipesByLikes.slice(0, 4)}
                    />
                </>
            )}
            {filter.isSearchModeOnPage && (
                <MainSection
                    buttonTitle='Загрузить еще'
                    sizeButton='md'
                    displayButton={{ base: 'block', xl: 'none' }}
                    onClick={() => {}}
                    recipes={filteredRecipes}
                />
            )}
            <CulinaryBlogs />
            <LastSection
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                firstCardsData={veganCuisineData}
                secondCardsData={veganCuisineDataShort}
            />
        </>
    );
};
