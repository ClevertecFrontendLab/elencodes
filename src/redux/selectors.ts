import { createSelector } from '@reduxjs/toolkit';

import { selectCategories, selectSubCategories } from '~/redux/slices/category-slice.ts';

export const selectCategoriesOptions = createSelector([selectCategories], (categories) =>
    categories.map((category) => ({
        label: category.title,
        value: category._id,
    })),
);

export const selectSubCategoriesOptions = createSelector([selectSubCategories], (subCategories) =>
    subCategories.map((subCategory) => ({
        label: subCategory.title,
        value: subCategory._id,
    })),
);
