import { lazy, Suspense } from 'react';

import { GlobalSpinner, NotificationAlert } from '~/components';
import { JUICIEST_PARAMS, NEWEST_PARAMS } from '~/query/constants/recipe-consts.ts';
import { useGetCategoriesQuery } from '~/query/services/categories/categories-api.ts';
import { useGetRecipesQuery } from '~/query/services/recipes/recipes-api.ts';
import { useAppSelector } from '~/redux/hooks.ts';
import { selectAppLoading } from '~/redux/slices/app-slice.ts';

const Layout = lazy(() => import('~/components/layout/layout/layout.tsx'));

export const MainLayout = () => {
    const isLoading = useAppSelector(selectAppLoading);
    const { isLoading: loadingCategory } = useGetCategoriesQuery();
    const { isLoading: loadingNewest } = useGetRecipesQuery(NEWEST_PARAMS);
    const { isLoading: loadingJuiciest } = useGetRecipesQuery(JUICIEST_PARAMS);

    const isAppLoading = loadingCategory || loadingNewest || loadingJuiciest;

    return (
        <>
            <GlobalSpinner isOpen={isLoading || isAppLoading} />
            <Suspense fallback={<GlobalSpinner isOpen={true} />}>
                <Layout />
            </Suspense>
            <NotificationAlert />
        </>
    );
};
