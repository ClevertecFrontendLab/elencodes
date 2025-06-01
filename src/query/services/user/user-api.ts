import { baseApi } from '~/query/base-api.ts';
import { ENDPOINTS } from '~/query/constants/endpoints.ts';
import { METHODS } from '~/query/constants/methods';
import { MeasureUnitsResponse } from '~/query/services/user/types.ts';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMeasureUnits: builder.query<MeasureUnitsResponse, void>({
            query: () => ({
                url: ENDPOINTS.measureUnits,
                method: METHODS.get,
            }),
        }),
    }),
});

export const { useGetMeasureUnitsQuery } = userApi;
