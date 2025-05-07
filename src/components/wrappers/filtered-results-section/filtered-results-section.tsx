import { Button, Flex } from '@chakra-ui/react';

import { ResponsiveRecipeGrid } from '~/components';
import { useFilterQueryParams } from '~/hooks/use-filter-query-params.tsx';
import { INITIAL_PAGE_NUM } from '~/query/constants/recipe-consts.ts';
import { useLazyGetRecipesWithFiltersQuery } from '~/query/services/recipes/recipes-api.ts';
import { useAppDispatch, useAppSelector } from '~/redux/hooks.ts';
import {
    appendFilteredRecipes,
    incrementPage,
    selectFilteredPage,
    selectFilteredRecipes,
    selectHasMore,
    setHasMore,
} from '~/redux/slices/recipes-slice.ts';

export const FilteredResultsSection = () => {
    const dispatch = useAppDispatch();
    const params = useFilterQueryParams();
    const filteredRecipes = useAppSelector(selectFilteredRecipes);
    const currentPage = useAppSelector(selectFilteredPage);
    const hasMore = useAppSelector(selectHasMore);
    const [trigger] = useLazyGetRecipesWithFiltersQuery();

    const handleLoadMore = async () => {
        const nextPage = currentPage + INITIAL_PAGE_NUM;
        const response = await trigger({ ...params, page: nextPage }).unwrap();

        dispatch(appendFilteredRecipes(response.data));
        dispatch(incrementPage());
        dispatch(setHasMore(currentPage + INITIAL_PAGE_NUM < response.meta.totalPages));
    };

    return (
        <Flex direction='column' w='100%' align='center' gap={4} pt={{ base: 4, sm: 6 }}>
            <ResponsiveRecipeGrid recipes={filteredRecipes} />
            {hasMore && (
                <Button bg='lime.400' color='black' onClick={handleLoadMore}>
                    Загрузить еще
                </Button>
            )}
        </Flex>
    );
};
