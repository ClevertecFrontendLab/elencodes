import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';

import { clearStateLoader } from '~/app/routes/utils/clear-state-loader.ts';
import Layout from '~/components/layout/layout/layout.tsx';
import { MainLayout } from '~/layouts/main-layout/main-layout.tsx';
import { JuiciestPage, MainPage, NotFoundPage, RecipeDetailsPage } from '~/pages';
import { CategoryPage } from '~/pages/category-page/category-page.tsx';

import { PATHS } from './paths';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<MainLayout />}>
                <Route path={PATHS.ROOT} element={<MainPage />} loader={clearStateLoader} />
                <Route path={PATHS.JUICIEST} element={<JuiciestPage />} loader={clearStateLoader} />
                <Route
                    path={PATHS.CATEGORY_SUBCATEGORY}
                    element={<CategoryPage />}
                    loader={clearStateLoader}
                />
                <Route path={PATHS.RECIPE_DETAILS} element={<RecipeDetailsPage />} />
            </Route>
            <Route element={<Layout />}>
                <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
                <Route path={PATHS.ERROR} element={<NotFoundPage />} />
            </Route>
        </>,
    ),
);

export default router;
