import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { setAppError, setAppLoader } from '~/redux/slices/app-slice';

import { REQUEST_ERROR_MESSAGE, REQUEST_ERROR_TITLE } from '../constants/base-consts';

export const baseUrl = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({ baseUrl });

export const baseQueryWithErrorAndLoader: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const endpointName = api.endpoint;
    const skipLoader = endpointName === 'getRecipesWithFilters';

    if (!skipLoader) {
        api.dispatch(setAppLoader(true));
    }

    try {
        const result = await baseQuery(args, api, extraOptions);

        if (result.error) {
            api.dispatch(setAppLoader(false));
            api.dispatch(
                setAppError({
                    title: REQUEST_ERROR_TITLE,
                    description: REQUEST_ERROR_MESSAGE,
                }),
            );
        } else {
            api.dispatch(setAppError(null));
        }

        return result;
    } catch (error) {
        api.dispatch(setAppLoader(false));
        api.dispatch(
            setAppError({
                title: REQUEST_ERROR_TITLE,
                description: REQUEST_ERROR_MESSAGE,
            }),
        );
        throw error;
    } finally {
        if (!skipLoader) {
            api.dispatch(setAppLoader(false));
        }
    }
};
