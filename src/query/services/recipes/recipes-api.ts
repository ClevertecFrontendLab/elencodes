import { baseApi } from '~/query/base-api.ts';
import { ENDPOINTS } from '~/query/constants/endpoints.ts';
import { formatEntityWithImages } from '~/utils/format-entity-with-images.ts';

import {
    PageParam,
    Recipe,
    RecipeByCategoryQueryParams,
    RecipeQueryParams,
    RecipeResponse,
} from './types.ts';

export const recipesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipeResponse, RecipeQueryParams>({
            query: (params) => ({
                url: ENDPOINTS.recipes,
                method: 'GET',
                params,
            }),
            transformResponse: (response: RecipeResponse): RecipeResponse => ({
                ...response,
                data: response.data.map((recipe) => formatEntityWithImages(recipe)),
            }),
        }),
        getRecipeByCategory: builder.query<RecipeResponse, RecipeByCategoryQueryParams>({
            query: ({ id, ...params }) => ({
                url: `${ENDPOINTS.recipesByCategory}/${id}`,
                params: params,
            }),
            transformResponse: (response: RecipeResponse): RecipeResponse => ({
                ...response,
                data: response.data.map((recipe) => formatEntityWithImages(recipe)),
            }),
        }),
        getRecipeById: builder.query<Recipe, string>({
            query: (id) => ({ url: `${ENDPOINTS.recipes}/${id}` }),
            transformResponse: (response: Recipe): Recipe => formatEntityWithImages(response),
        }),
        getRecipeByCategoryId: builder.infiniteQuery<
            RecipeResponse,
            RecipeByCategoryQueryParams,
            PageParam
        >({
            infiniteQueryOptions: {
                initialPageParam: { page: 1 },
                getNextPageParam(lastPage) {
                    const nextPage = lastPage.meta.page + 1;
                    return nextPage > lastPage.meta.totalPages ? undefined : { page: nextPage };
                },
            },
            query: ({ queryArg, pageParam }) => {
                const { id, ...restParams } = queryArg;
                const page = pageParam?.page || 1;
                return {
                    url: `${ENDPOINTS.recipesByCategory}/${id}`,
                    params: { ...restParams, page },
                };
            },
            transformResponse: (response: RecipeResponse): RecipeResponse => ({
                data: response.data.map(formatEntityWithImages),
                meta: response.meta,
            }),
        }),
        getRecipesInfinite: builder.infiniteQuery<
            RecipeResponse,
            RecipeQueryParams,
            { page: number }
        >({
            infiniteQueryOptions: {
                initialPageParam: { page: 1 },
                getNextPageParam(lastPage) {
                    const nextPage = lastPage.meta.page + 1;
                    return nextPage > lastPage.meta.totalPages ? undefined : { page: nextPage };
                },
            },
            query: ({ queryArg, pageParam }) => {
                const page = pageParam?.page || 1;
                return {
                    url: ENDPOINTS.recipes,
                    method: 'GET',
                    params: { ...queryArg, page },
                };
            },
            transformResponse: (response: RecipeResponse): RecipeResponse => ({
                ...response,
                data: response.data.map((recipe) => formatEntityWithImages(recipe)),
            }),
        }),
        getRecipesWithFilters: builder.query<RecipeResponse, RecipeQueryParams>({
            query: (params) => ({
                url: ENDPOINTS.recipes,
                method: 'GET',
                params,
            }),
            transformResponse: (response: RecipeResponse): RecipeResponse => ({
                ...response,
                data: response.data.map((recipe) => formatEntityWithImages(recipe)),
            }),
        }),
    }),
});

export const {
    useGetRecipesQuery,
    useGetRecipeByCategoryQuery,
    useGetRecipeByIdQuery,
    useGetRecipeByCategoryIdInfiniteQuery,
    useGetRecipesInfiniteInfiniteQuery,
    useLazyGetRecipesWithFiltersQuery,
} = recipesApi;
