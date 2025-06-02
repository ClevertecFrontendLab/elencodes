import { baseApi } from '~/query/base-api.ts';
import { ENDPOINTS } from '~/query/constants/endpoints.ts';
import { METHODS } from '~/query/constants/methods.ts';
import { TAGS } from '~/query/constants/tags.ts';

import {
    BookmarkRecipeResponse,
    CreateRecipeBody,
    CreateRecipeResponse,
    LikeRecipeResponse,
    PageParam,
    Recipe,
    RecipeByCategoryQueryParams,
    RecipeQueryParams,
    RecipeResponse,
    SaveDraftBody,
    SaveDraftResponse,
} from './types.ts';

export const recipesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipeResponse, RecipeQueryParams>({
            query: (params) => ({
                url: ENDPOINTS.recipes,
                method: METHODS.get,
                params,
            }),
            providesTags: (result) =>
                result?.data
                    ? [
                          ...result.data.map(({ _id }) => ({
                              type: TAGS.RECIPE as const,
                              id: _id,
                          })),
                          { type: TAGS.RECIPE as const, id: 'LIST' },
                      ]
                    : [{ type: TAGS.RECIPE as const, id: 'LIST' }],
        }),
        getRecipeByCategory: builder.query<RecipeResponse, RecipeByCategoryQueryParams>({
            query: ({ id, ...params }) => ({
                url: `${ENDPOINTS.recipesByCategory}/${id}`,
                params: params,
            }),
            providesTags: (result) =>
                result?.data
                    ? [
                          ...result.data.map(({ _id }) => ({
                              type: TAGS.RECIPE as const,
                              id: _id,
                          })),
                          { type: TAGS.RECIPE as const, id: 'LIST' },
                      ]
                    : [{ type: TAGS.RECIPE as const, id: 'LIST' }],
        }),
        getRecipeById: builder.query<Recipe, string>({
            query: (id) => ({ url: `${ENDPOINTS.recipes}/${id}` }),
            providesTags: (result, _error, id) =>
                result
                    ? [{ type: TAGS.RECIPE as const, id }]
                    : [{ type: TAGS.RECIPE as const, id: 'LIST' }],
        }),
        getRecipeByCategoryId: builder.infiniteQuery<
            RecipeResponse,
            RecipeByCategoryQueryParams,
            PageParam
        >({
            infiniteQueryOptions: {
                initialPageParam: { page: 1 },
                getNextPageParam(lastPage) {
                    if (!lastPage?.meta) return undefined;
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
            providesTags: (result) =>
                result?.pages
                    ? [
                          ...result.pages.flatMap((page) =>
                              page.data.map(({ _id }) => ({
                                  type: TAGS.RECIPE as const,
                                  id: _id,
                              })),
                          ),
                          { type: TAGS.RECIPE as const, id: 'LIST' },
                      ]
                    : [{ type: TAGS.RECIPE as const, id: 'LIST' }],
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
                    method: METHODS.get,
                    params: { ...queryArg, page },
                };
            },
            providesTags: (result) =>
                result?.pages
                    ? [
                          ...result.pages.flatMap((page) =>
                              page.data.map(({ _id }) => ({
                                  type: TAGS.RECIPE as const,
                                  id: _id,
                              })),
                          ),
                          { type: TAGS.RECIPE as const, id: 'LIST' },
                      ]
                    : [{ type: TAGS.RECIPE as const, id: 'LIST' }],
        }),
        getRecipesWithFilters: builder.query<RecipeResponse, RecipeQueryParams>({
            query: (params) => ({
                url: ENDPOINTS.recipes,
                method: METHODS.get,
                params,
            }),
            providesTags: (result) =>
                result?.data
                    ? [
                          ...result.data.map(({ _id }) => ({
                              type: TAGS.RECIPE as const,
                              id: _id,
                          })),
                          { type: TAGS.RECIPE as const, id: 'LIST' },
                      ]
                    : [{ type: TAGS.RECIPE as const, id: 'LIST' }],
        }),
        createRecipe: builder.mutation<CreateRecipeResponse, CreateRecipeBody>({
            query: (body) => ({
                url: ENDPOINTS.recipes,
                method: METHODS.post,
                body,
            }),
            invalidatesTags: [{ type: TAGS.RECIPE as const, id: 'LIST' }],
        }),
        editRecipe: builder.mutation<CreateRecipeResponse, { id: string; body: CreateRecipeBody }>({
            query: ({ id, body }) => ({
                url: `${ENDPOINTS.recipes}/${id}`,
                method: METHODS.patch,
                body,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: TAGS.RECIPE as const, id },
                { type: TAGS.RECIPE as const, id: 'LIST' },
            ],
        }),
        saveDraft: builder.mutation<SaveDraftResponse, SaveDraftBody>({
            query: (body) => ({
                url: ENDPOINTS.saveDraft,
                method: METHODS.post,
                body,
            }),
            invalidatesTags: [{ type: TAGS.RECIPE as const, id: 'LIST' }],
        }),
        likeRecipe: builder.mutation<LikeRecipeResponse, string>({
            query: (id) => ({
                url: `${ENDPOINTS.recipes}/${id}${ENDPOINTS.like}`,
                method: METHODS.post,
            }),
            invalidatesTags: (_result, _error, id) => [{ type: TAGS.RECIPE as const, id }],
        }),
        bookmarkRecipe: builder.mutation<BookmarkRecipeResponse, string>({
            query: (id) => ({
                url: `${ENDPOINTS.recipes}/${id}${ENDPOINTS.bookmark}`,
                method: METHODS.post,
            }),
            invalidatesTags: (_result, _error, id) => [{ type: TAGS.RECIPE as const, id }],
        }),
        deleteRecipe: builder.mutation<void, string>({
            query: (id) => ({
                url: `${ENDPOINTS.recipes}/${id}`,
                method: METHODS.delete,
            }),
            invalidatesTags: (_result, _error, id) => [
                { type: TAGS.RECIPE as const, id },
                { type: TAGS.RECIPE as const, id: 'LIST' },
            ],
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
    useCreateRecipeMutation,
    useEditRecipeMutation,
    useSaveDraftMutation,
    useLikeRecipeMutation,
    useBookmarkRecipeMutation,
    useDeleteRecipeMutation,
} = recipesApi;
