import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorAndLoader } from './base/base-api';

export const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithErrorAndLoader,
    endpoints: () => ({}),
});

export const authorizationApi = createApi({
    reducerPath: 'authorization-api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: () => ({}),
});
