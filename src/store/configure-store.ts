import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { categoriesReducer } from '~/model/categoriesSlice';
import { filterReducer } from '~/model/filterSlice';
import { recipesReducer } from '~/model/recipesSlice';
import { apiSlice } from '~/query/create-api';

import appReducer, { appSlice } from './app-slice';

const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    recipes: recipesReducer,
    categories: categoriesReducer,
    filter: filterReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});

export type RootState = ReturnType<typeof store.getState>;
