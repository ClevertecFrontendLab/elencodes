import { ActionCounterPropsType } from './ActionCounterType';
import { CategoryType } from './recipeType';

export type FirstCardsDataType = {
    id: number;
    title: string;
    description: string;
    iconCounters: ActionCounterPropsType[];
    category: CategoryType;
    bgColorTag: string;
};
