import { baseApi } from '~/query/base-api';
import { ENDPOINTS } from '~/query/constants/endpoints';
import { METHODS } from '~/query/constants/methods';
import { TAGS } from '~/query/constants/tags';
import { transformBlogsResponse } from '~/utils/transform-blogs-response';

import { BloggerInfo, BlogsBody, BlogsResponse, RecipesByUserIdResponse } from './types';

export const blogsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query<BlogsResponse, BlogsBody>({
            query: (params) => ({
                url: ENDPOINTS.blogs,
                method: METHODS.get,
                params,
            }),
            transformResponse: transformBlogsResponse,
            providesTags: [TAGS.BLOGS],
        }),
        toggleSubscription: builder.mutation<void, { fromUserId: string; toUserId: string }>({
            query: (body) => ({
                url: ENDPOINTS.subscription,
                method: METHODS.patch,
                body,
            }),
            invalidatesTags: [TAGS.BLOGS],
        }),
        getBloggerById: builder.query<BloggerInfo, { bloggerId: string; currentUserId: string }>({
            query: ({ bloggerId, currentUserId }) => ({
                url: `${ENDPOINTS.blogs}/${bloggerId}`,
                method: METHODS.get,
                params: { currentUserId },
            }),
            providesTags: [TAGS.BLOGS],
        }),
        getRecipeByUserId: builder.query<RecipesByUserIdResponse, string>({
            query: (id) => ({ url: `${ENDPOINTS.recipeByUser}${id}` }),
        }),
    }),
});

export const {
    useGetBlogsQuery,
    useToggleSubscriptionMutation,
    useGetBloggerByIdQuery,
    useGetRecipeByUserIdQuery,
} = blogsApi;
