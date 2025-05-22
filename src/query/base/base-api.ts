import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { ACCESS_TOKEN_HEADER } from '~/query/constants/auth-consts.ts';
import { REQUEST_ERROR_MESSAGE, REQUEST_ERROR_TITLE } from '~/query/constants/base-consts.ts';
import { ENDPOINTS } from '~/query/constants/endpoints.ts';
import { METHODS } from '~/query/constants/methods.ts';
import { StatusCodes } from '~/query/constants/status-codes.ts';
import { ApplicationState } from '~/redux/configure-store.ts';
import { setAppError, setAppLoader } from '~/redux/slices/app-slice.ts';
import { resetAuth, setAccessToken } from '~/redux/slices/auth-slice.ts';

export const baseUrl = import.meta.env.VITE_API_BASE_URL;

const rawBaseQuery = fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as ApplicationState).auth.accessToken;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseQueryWithErrorAndLoader: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const state = api.getState() as ApplicationState;
    const endpointName = api.endpoint;
    const shouldShowLoader = !state.app.error;
    const skipLoader = endpointName === 'getRecipesWithFilters';

    if (shouldShowLoader && !skipLoader) {
        api.dispatch(setAppLoader(true));
    }

    const handleError = () => {
        api.dispatch(
            setAppError({
                title: REQUEST_ERROR_TITLE,
                description: REQUEST_ERROR_MESSAGE,
            }),
        );
    };

    try {
        let result = await rawBaseQuery(args, api, extraOptions);

        if (result?.meta?.response) {
            const accessToken = result.meta.response.headers.get(ACCESS_TOKEN_HEADER);
            if (accessToken) {
                api.dispatch(setAccessToken(accessToken));
            }
        }

        if (result.error?.status === StatusCodes.UNAUTHORIZED) {
            const refreshResult = await rawBaseQuery(
                { url: ENDPOINTS.refreshToken, method: METHODS.get },
                api,
                extraOptions,
            );

            const newAccessToken = refreshResult.meta?.response?.headers.get(ACCESS_TOKEN_HEADER);
            if (newAccessToken) {
                api.dispatch(setAccessToken(newAccessToken));
                result = await rawBaseQuery(args, api, extraOptions);
            } else {
                api.dispatch(resetAuth());
                return { error: { status: StatusCodes.UNAUTHORIZED, data: 'Unauthorized' } };
            }
        }

        if (result.error) {
            handleError();
        } else {
            api.dispatch(setAppError(null));
        }

        return result;
    } catch (e) {
        handleError();
        throw e;
    } finally {
        if (!skipLoader) {
            api.dispatch(setAppLoader(false));
        }
    }
};
