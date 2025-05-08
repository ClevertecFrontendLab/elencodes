import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '~/redux/configure-store';

export const selectCategories = (state: ApplicationState) => state.category.categories;

export const selectCategoriesOptions = createSelector([selectCategories], (categories) =>
    categories.map((category) => ({
        label: category.title,
        value: category._id,
    })),
);
