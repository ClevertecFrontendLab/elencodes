import { useEffect, useMemo, useState } from 'react';

import { SearchingContent } from '~/components/SearchingContent/SearchingContent';
import { veganCuisineData } from '~/data/homePage/veganCuisineData.ts';
import { veganCuisineDataShort } from '~/data/homePage/veganCuisineDataShort.ts';
import { selectAllRecipes, selectFilters } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

import { LastSection } from '../Main/Sections/lastSection/LastSection';
import { MainSection } from '../Main/Sections/mainSection/MainSection';

export const TheJuciestPage = () => {
    const recipes = useAppSelector(selectAllRecipes);
    const filter = useAppSelector(selectFilters);
    const [isNothingFound, setIsNothingFound] = useState(false);

    const sortedRecipes = useMemo(() => [...recipes].sort((a, b) => b.likes - a.likes), [recipes]);

    const filteredRecipes = useMemo(() => {
        let result = sortedRecipes;

        if (filter.isSearchModeOnPage) {
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
        }

        return result;
    }, [sortedRecipes, filter]);

    useEffect(() => {
        const hasActiveSearch =
            filter.isSearchModeOnPage &&
            (filter.searchQuery || filter.pageAllergenFilter.excludedAllergens.length > 0);

        setIsNothingFound(filteredRecipes.length === 0 && hasActiveSearch);
    }, [filteredRecipes, filter]);

    return (
        <>
            <SearchingContent
                title='Самое сочное'
                isNothingFound={isNothingFound}
                setIsNothingFound={setIsNothingFound}
            />
            <MainSection
                onClick={() => {}}
                displayButton='block'
                buttonTitle='Загрузить еще'
                sizeButton='md'
                recipes={filteredRecipes}
            />
            <LastSection
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету.'
                firstCardsData={veganCuisineData}
                secondCardsData={veganCuisineDataShort}
            />
        </>
    );
};
