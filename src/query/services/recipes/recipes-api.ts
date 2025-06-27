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

// Хелпер для генерации providesTags
type ValidTag =
    | typeof TAGS.RECIPE
    | typeof TAGS.BLOGS
    | typeof TAGS.USERINFO
    | typeof TAGS.ALLRECIPES;

function providesTagsFromList<T extends { _id: string }>(
    data: T[] | undefined,
    extraTags: readonly { type: ValidTag; id: string }[] = [],
): readonly { type: ValidTag; id: string }[] {
    const tags: { type: ValidTag; id: string }[] = [];

    if (Array.isArray(data)) {
        for (const item of data) {
            tags.push({ type: TAGS.RECIPE, id: item._id });
        }
    }

    tags.push({ type: TAGS.RECIPE, id: 'LIST' });
    tags.push(...extraTags);

    return tags;
}

export const recipesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipeResponse, RecipeQueryParams>({
            query: (params) => ({
                url: ENDPOINTS.recipes,
                method: METHODS.get,
                params,
            }),
            providesTags: (result) =>
                providesTagsFromList(result?.data, [{ type: TAGS.ALLRECIPES, id: 'LIST' }]),
        }),
        getRecipeByCategory: builder.query<RecipeResponse, RecipeByCategoryQueryParams>({
            query: ({ id, ...params }) => ({
                url: `${ENDPOINTS.recipesByCategory}/${id}`,
                params: params,
            }),
            providesTags: (result) => providesTagsFromList(result?.data),
        }),
        getRecipeById: builder.query<Recipe, string>({
            query: (id) => ({ url: `${ENDPOINTS.recipes}/${id}` }),
            providesTags: (result, _error, id) =>
                result ? [{ type: TAGS.RECIPE, id }] : [{ type: TAGS.RECIPE, id: 'LIST' }],
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
            providesTags: (result) => {
                const allItems = result?.pages?.flatMap((p) => p?.data || []);
                return providesTagsFromList(allItems);
            },
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
            providesTags: (result) => {
                const allItems = result?.pages?.flatMap((p) => p?.data || []);
                return providesTagsFromList(allItems, [{ type: TAGS.ALLRECIPES, id: 'LIST' }]);
            },
        }),
        getRecipesWithFilters: builder.query<RecipeResponse, RecipeQueryParams>({
            query: (params) => ({
                url: ENDPOINTS.recipes,
                method: METHODS.get,
                params,
            }),
            providesTags: (result) => providesTagsFromList(result?.data),
        }),
        createRecipe: builder.mutation<CreateRecipeResponse, CreateRecipeBody>({
            query: (body) => ({
                url: ENDPOINTS.recipes,
                method: METHODS.post,
                body,
            }),
            invalidatesTags: [
                { type: TAGS.RECIPE, id: 'LIST' },
                { type: TAGS.ALLRECIPES, id: 'LIST' },
            ],
        }),
        editRecipe: builder.mutation<CreateRecipeResponse, { id: string; body: CreateRecipeBody }>({
            query: ({ id, body }) => ({
                url: `${ENDPOINTS.recipes}/${id}`,
                method: METHODS.patch,
                body,
            }),
            invalidatesTags: (_res, _err, { id }) => [
                { type: TAGS.RECIPE, id },
                { type: TAGS.RECIPE, id: 'LIST' },
                { type: TAGS.USERINFO, id: 'USER' },
            ],
        }),
        saveDraft: builder.mutation<SaveDraftResponse, SaveDraftBody>({
            query: (body) => ({
                url: ENDPOINTS.saveDraft,
                method: METHODS.post,
                body,
            }),
            invalidatesTags: [
                { type: TAGS.RECIPE, id: 'LIST' },
                { type: TAGS.USERINFO, id: 'USER' },
            ],
        }),
        likeRecipe: builder.mutation<LikeRecipeResponse, string>({
            query: (id) => ({
                url: `${ENDPOINTS.recipes}/${id}${ENDPOINTS.like}`,
                method: METHODS.post,
            }),
            invalidatesTags: (_res, _err, id) => [{ type: TAGS.RECIPE, id }],
        }),
        bookmarkRecipe: builder.mutation<BookmarkRecipeResponse, string>({
            query: (id) => ({
                url: `${ENDPOINTS.recipes}/${id}${ENDPOINTS.bookmark}`,
                method: METHODS.post,
            }),
            invalidatesTags: (_res, _err, id) => [{ type: TAGS.RECIPE, id }],
        }),
        deleteRecipe: builder.mutation<void, string>({
            query: (id) => ({
                url: `${ENDPOINTS.recipes}/${id}`,
                method: METHODS.delete,
            }),
            invalidatesTags: (_res, _err, id) => [
                { type: TAGS.RECIPE, id },
                { type: TAGS.RECIPE, id: 'LIST' },
                { type: TAGS.ALLRECIPES, id: 'LIST' },
            ],
        }),
        editDraft: builder.mutation<SaveDraftResponse, { draftId: string; body: SaveDraftBody }>({
            query: ({ draftId, body }) => ({
                url: `${ENDPOINTS.editDraft}${draftId}`,
                method: METHODS.patch,
                body,
            }),
            invalidatesTags: [{ type: TAGS.USERINFO, id: 'USER' }],
        }),
        recommendRecipe: builder.mutation<void, string>({
            query: (id) => ({
                url: `${ENDPOINTS.recommendRecipe}/${id}`,
                method: METHODS.post,
            }),
            invalidatesTags: (_res, _err, id) => [
                { type: TAGS.USERINFO, id: 'USER' },
                { type: TAGS.RECIPE, id },
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
    useEditDraftMutation,
    useRecommendRecipeMutation,
} = recipesApi;
