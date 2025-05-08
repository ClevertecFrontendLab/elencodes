import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithErrorAndLoader } from './base/base-api';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithErrorAndLoader,
    endpoints: () => ({}),
});
