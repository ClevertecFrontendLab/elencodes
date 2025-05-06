import { ActionCounterPropsType } from './actionCounterType';

export type FirstCardsDataType = {
    id: number;
    title: string;
    description: string;
    iconCounters: ActionCounterPropsType[];
    category: string | string[];
    bgColorTag: string;
};
