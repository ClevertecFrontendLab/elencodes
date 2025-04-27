import { CategoryType, RecipeType } from '~/types/recipeType.ts';

import { RootState } from '../store/configure-store.ts';
import { IFilterState } from './filterSlice.ts';

export const selectAllRecipes = (state: RootState): RecipeType[] => state.recipes;
export const selectCategories = (state: RootState): CategoryType[] => state.categories;
export const selectFilters = (state: RootState): IFilterState => state.filter;
