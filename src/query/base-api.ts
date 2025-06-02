import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorAndLoader } from './base/base-api';
import { TAGS } from './constants/tags';

export const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithErrorAndLoader,
    tagTypes: [TAGS.RECIPE],
    endpoints: () => ({}),
});

export const authorizationApi = createApi({
    reducerPath: 'authorization-api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: () => ({}),
});
