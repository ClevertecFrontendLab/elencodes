import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { baseApi } from '~/query/base-api.ts';

import { allergensReducer } from './slices/allergens-slice.ts';
import appReducer, { appSlice } from './slices/app-slice.ts';
import { authorsReducer } from './slices/authors-slice.ts';
import { categoryReducer } from './slices/category-slice.ts';
import { garnishReducer } from './slices/garnish-slice.ts';
import { meatReducer } from './slices/meat-slice.ts';
import { recipesReducer } from './slices/recipes-slice.ts';
import { searchReducer } from './slices/search-slice.ts';
const isProduction = false;

const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    allergens: allergensReducer,
    authors: authorsReducer,
    category: categoryReducer,
    garnish: garnishReducer,
    meat: meatReducer,
    recipes: recipesReducer,
    search: searchReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
    devTools: !isProduction,
});
