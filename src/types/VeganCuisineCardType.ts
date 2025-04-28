import { ActionCounterPropsType } from './ActionCounterType';
import { MenuItemTagType } from './MenuItemTagType';

export type VeganCuisineCardPropsType = {
    title: string;
    description: string;
    iconCounters: ActionCounterPropsType[];
    category: MenuItemTagType['category'];
    bgColorTag: string;
};
