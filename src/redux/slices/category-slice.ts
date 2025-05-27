import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category, SubCategory } from '~/types/category-type';
import { getDataFromLocalStorage, LOCALSTORAGE_KEYS } from '~/utils/manage-local-storage';

type CategoryState = {
    categories: Category[];
    subCategories: SubCategory[];
    selectedSubCategoriesIds: string[];
    selectedCategories: string[];
};

const fallbackCategories = getDataFromLocalStorage(LOCALSTORAGE_KEYS.CATEGORIES) as Category[];
const fallbackSubCategories = getDataFromLocalStorage(
    LOCALSTORAGE_KEYS.SUBCATEGORIES,
) as SubCategory[];

const initialState: CategoryState = {
    categories:
        Array.isArray(fallbackCategories) && fallbackCategories.length > 0
            ? fallbackCategories
            : [],
    subCategories:
        Array.isArray(fallbackSubCategories) && fallbackSubCategories.length > 0
            ? fallbackSubCategories
            : [],
    selectedSubCategoriesIds: [],
    selectedCategories: [],
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<Category[]>) {
            state.categories = action.payload;
        },
        setSubCategories(state, { payload }: PayloadAction<SubCategory[]>) {
            state.subCategories = payload;
        },
        setSelectedCategories(state, action: PayloadAction<string[]>) {
            state.selectedCategories = action.payload;

            const matchedSubCategories = state.subCategories.filter((sub) =>
                action.payload.includes(sub.rootCategoryId),
            );

            state.selectedSubCategoriesIds = matchedSubCategories.map((sub) => sub._id);
        },
        clearSelectedCategories(state) {
            state.selectedCategories = [];
            state.selectedSubCategoriesIds = [];
        },
        clearState() {
            return initialState;
        },
    },
    selectors: {
        selectCategories: (state) => state.categories,
        selectSubCategories: (state) => state.subCategories,
        selectSelectedCategories: (state) => state.selectedCategories,
        selectSelectedSubCategories: (state) => state.selectedSubCategoriesIds,
    },
});

export const {
    setCategories,
    setSubCategories,
    setSelectedCategories,
    clearSelectedCategories,
    clearState,
} = categorySlice.actions;
export const {
    selectCategories,
    selectSubCategories,
    selectSelectedCategories,
    selectSelectedSubCategories,
} = categorySlice.selectors;

export const categoryReducer = categorySlice.reducer;
