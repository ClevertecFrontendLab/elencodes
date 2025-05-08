import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppError = {
    title: string;
    description: string;
} | null;

const initialState = {
    isLoading: false,
    error: null as AppError,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError(state, { payload }: PayloadAction<AppError>) {
            state.error = payload;
        },
        setAppLoader(state, { payload: isLoading }: PayloadAction<boolean>) {
            state.isLoading = isLoading;
        },
    },
    selectors: {
        selectAppError: (state) => state.error,
        selectAppLoading: (state) => state.isLoading,
    },
});

export const { setAppError, setAppLoader } = appSlice.actions;
export const { selectAppError, selectAppLoading } = appSlice.selectors;
export default appSlice.reducer;
