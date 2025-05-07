import { Button, Flex } from '@chakra-ui/react';

import { CategoryPageLayout, CategoryPreviewSection, ResponsiveRecipeGrid } from '~/components';
import { LOAD_MORE_BUTTON } from '~/constants/data-test-ids';
import { JUICIEST_PAGE_PARAMS } from '~/query/constants/recipe-consts.ts';
import { useGetRecipesInfiniteInfiniteQuery } from '~/query/services/recipes/recipes-api.ts';

export const JuiciestPage = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
        useGetRecipesInfiniteInfiniteQuery(JUICIEST_PAGE_PARAMS);

    const juiciestItems = data?.pages.flatMap((page) => page.data) ?? [];

    const shouldShowLoadMoreButton = hasNextPage && !isLoading;

    return (
        <CategoryPageLayout title='Самое сочное'>
            <Flex
                mt={10}
                mb={3}
                flexDirection='column'
                gap={4}
                justifyContent='center'
                alignItems='center'
            >
                <ResponsiveRecipeGrid recipes={juiciestItems} />

                {shouldShowLoadMoreButton && (
                    <Button
                        data-test-id={LOAD_MORE_BUTTON}
                        bg='lime.400'
                        color='black'
                        onClick={() => fetchNextPage()}
                        isLoading={isFetchingNextPage}
                    >
                        {isFetchingNextPage ? 'Загрузка' : 'Загрузить еще'}
                    </Button>
                )}

                <CategoryPreviewSection />
            </Flex>
        </CategoryPageLayout>
    );
};
