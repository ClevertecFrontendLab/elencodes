import { Meat } from '~/types/recipeType';

export type MeatTypeItem = {
    value: Meat;
    label: string;
};

export const meatTypes: MeatTypeItem[] = [
    { value: 'chicken', label: 'Курица' },
    { value: 'pork', label: 'Свинина' },
    { value: 'beef', label: 'Говядина' },
    { value: 'turkey', label: 'Индейка' },
    { value: 'duck', label: 'Утка' },
];
