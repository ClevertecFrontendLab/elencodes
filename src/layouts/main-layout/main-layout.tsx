import { lazy, Suspense } from 'react';

import { GlobalSpinner } from '~/components';
import { JUICIEST_PARAMS, NEWEST_PARAMS } from '~/query/constants/recipe-consts.ts';
import { useGetCategoriesQuery } from '~/query/services/categories/categories-api.ts';
import { useGetRecipesQuery } from '~/query/services/recipes/recipes-api.ts';
import { useGetMeasureUnitsQuery } from '~/query/services/user/user-api.ts';
import { useAppSelector } from '~/redux/hooks.ts';
import { selectAppLoading } from '~/redux/slices/app-slice.ts';

const Layout = lazy(() => import('~/components/layout/layout/layout.tsx'));

export const MainLayout = () => {
    const isLoading = useAppSelector(selectAppLoading);
    const { isLoading: loadingCategory } = useGetCategoriesQuery();
    const { isLoading: loadingMeasure } = useGetMeasureUnitsQuery();
    const { isLoading: loadingNewest } = useGetRecipesQuery(NEWEST_PARAMS);
    const { isLoading: loadingJuiciest } = useGetRecipesQuery(JUICIEST_PARAMS);

    const showLoader =
        isLoading || loadingCategory || loadingNewest || loadingJuiciest || loadingMeasure;

    return (
        <>
            <GlobalSpinner isOpen={showLoader} />
            <Suspense fallback={<GlobalSpinner isOpen={true} />}>
                <Layout />
            </Suspense>
        </>
    );
};
