import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PrimitiveItem = string | number;
interface ValueItem {
    value: string;
    label: string;
}
type ToggleableItem = PrimitiveItem | ValueItem;

export interface IFilterState {
    isSearchModeOnPage: boolean;
    searchQuery: string;
    pageAllergenFilter: {
        isActive: boolean;
        excludedAllergens: string[];
    };
    drawerAllergenFilter: {
        isActive: boolean;
        excludedAllergens: string[];
    };
    selectedCategories: string[];
    selectedAuthors: string[];
    selectedMeatType: ValueItem[];
    selectedSideType: ValueItem[];
}

const initialState: IFilterState = {
    isSearchModeOnPage: false,
    searchQuery: '',
    pageAllergenFilter: {
        isActive: false,
        excludedAllergens: [],
    },
    drawerAllergenFilter: {
        isActive: false,
        excludedAllergens: [],
    },
    selectedCategories: [],
    selectedAuthors: [],
    selectedMeatType: [],
    selectedSideType: [],
};

const toggleArrayItem = <T extends ToggleableItem>(array: T[], item: T) => {
    const isObject = typeof item === 'object' && 'value' in item;
    const index = array.findIndex((el) =>
        isObject ? typeof el === 'object' && 'value' in el && el.value === item.value : el === item,
    );

    if (index !== -1) {
        array.splice(index, 1);
    } else {
        array.push(item);
    }
};

const createAllergenReducers = (filterKey: 'pageAllergenFilter' | 'drawerAllergenFilter') => ({
    toggleActive: (state: IFilterState, action: PayloadAction<boolean>) => {
        state[filterKey].isActive = action.payload;
        if (!action.payload) {
            state[filterKey].excludedAllergens = [];
        }
    },
    toggleAllergen: (state: IFilterState, action: PayloadAction<string>) => {
        toggleArrayItem(state[filterKey].excludedAllergens, action.payload);
        if (filterKey === 'pageAllergenFilter' && state[filterKey].excludedAllergens.length) {
            state.isSearchModeOnPage = true;
        }
    },
    addAllergen: (state: IFilterState, action: PayloadAction<string>) => {
        state[filterKey].excludedAllergens.push(action.payload);
        if (filterKey === 'pageAllergenFilter') {
            state.isSearchModeOnPage = true;
        }
    },
});

const createToggleReducer =
    <T extends ToggleableItem>(key: keyof IFilterState) =>
    (state: IFilterState, action: PayloadAction<T>) => {
        const array = state[key] as T[];
        toggleArrayItem(array, action.payload);
    };

const pageAllergenReducers = createAllergenReducers('pageAllergenFilter');
const drawerAllergenReducers = createAllergenReducers('drawerAllergenFilter');

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        toggleSearchModeOnPage: (state, action: PayloadAction<boolean>) => {
            state.isSearchModeOnPage = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
            if (!state.pageAllergenFilter.isActive) state.isSearchModeOnPage = false;
        },

        togglePageAllergenFilter: pageAllergenReducers.toggleActive,
        togglePageExcludedAllergen: pageAllergenReducers.toggleAllergen,
        addPageCustomAllergen: pageAllergenReducers.addAllergen,

        toggleDrawerAllergenFilter: drawerAllergenReducers.toggleActive,
        toggleDrawerExcludedAllergen: drawerAllergenReducers.toggleAllergen,
        addDrawerCustomAllergen: drawerAllergenReducers.addAllergen,

        toggleCategories: createToggleReducer<string>('selectedCategories'),
        toggleAuthors: createToggleReducer<string>('selectedAuthors'),
        toggleMeatType: createToggleReducer<ValueItem>('selectedMeatType'),
        toggleSideType: createToggleReducer<ValueItem>('selectedSideType'),

        removeMeatType: (state, action: PayloadAction<string>) => {
            state.selectedMeatType = state.selectedMeatType.filter(
                (item) => item.value !== action.payload,
            );
        },
        removeSideType: (state, action: PayloadAction<string>) => {
            state.selectedSideType = state.selectedSideType.filter(
                (item) => item.value !== action.payload,
            );
        },
        removeCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategories = state.selectedCategories.filter(
                (item) => item !== action.payload,
            );
        },
        removeAuthor: (state, action: PayloadAction<string>) => {
            state.selectedAuthors = state.selectedAuthors.filter((item) => item !== action.payload);
        },
        removeAllergen: (state, action: PayloadAction<string>) => {
            state.pageAllergenFilter.excludedAllergens =
                state.pageAllergenFilter.excludedAllergens.filter(
                    (item) => item !== action.payload,
                );
            state.drawerAllergenFilter.excludedAllergens =
                state.drawerAllergenFilter.excludedAllergens.filter(
                    (item) => item !== action.payload,
                );
        },

        resetFilters: (state) => {
            state.isSearchModeOnPage = false;
            state.searchQuery = '';
            state.pageAllergenFilter.excludedAllergens = [];
            state.pageAllergenFilter.isActive = false;
            state.drawerAllergenFilter.excludedAllergens = [];
            state.drawerAllergenFilter.isActive = false;
            state.selectedCategories = [];
            state.selectedAuthors = [];
            state.selectedMeatType = [];
            state.selectedSideType = [];
        },
    },
});

export const {
    toggleSearchModeOnPage,
    setSearchQuery,
    resetFilters,
    togglePageAllergenFilter,
    togglePageExcludedAllergen,
    addPageCustomAllergen,
    toggleDrawerAllergenFilter,
    toggleDrawerExcludedAllergen,
    addDrawerCustomAllergen,
    toggleCategories,
    toggleAuthors,
    toggleMeatType,
    toggleSideType,
    removeMeatType,
    removeSideType,
    removeCategory,
    removeAllergen,
    removeAuthor,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
