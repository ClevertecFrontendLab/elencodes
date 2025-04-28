export type Step = {
    stepNumber: number;
    description: string;
    image: string | null;
};
export type Meat = 'chicken' | 'pork' | 'beef' | 'turkey' | 'duck';
export type Side =
    | 'potatoes'
    | 'buckwheat'
    | 'pasta'
    | 'spagetti'
    | 'rice'
    | 'cabbage'
    | 'beans'
    | 'otherVegetables';

export type MeatTypeItem = {
    value: Meat;
    label: string;
};

export type SideDishTypes = {
    value: Side;
    label: string;
};

export type RecipeType = {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    image: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: { calories: number; proteins: number; fats: number; carbohydrates: number };
    ingredients: { title: string; count: string; measureUnit: string }[];
    steps: Step[];
    meat?: Meat;
    side?: Side;
};

export type CategoryType = {
    id: string;
    icon: string;
    name: string;
    nameEn: string;
    subcategories: SubcategoryType[];
    description: string;
};

export type SubcategoryType = {
    id: string;
    name: string;
    nameEn: string;
};

export type AllergenFilterState = {
    isActive: boolean;
    excludedAllergens: string[];
};

export type FilterState = {
    isSearchModeOnPage: boolean;
    searchQuery: string;
    pageAllergenFilter: AllergenFilterState;
    drawerAllergenFilter: AllergenFilterState;
    selectedCategories: string[];
    selectedAuthors: string[];
    selectedMeatType: MeatTypeItem[];
    selectedSideType: SideDishTypes[];
};

export type AppState = {
    recipes: RecipeType[];
    categories: CategoryType[];
    filters: FilterState;
};
