import { Side } from '~/types/recipeType';

export type SideDishTypes = {
    value: Side;
    label: string;
}[];

export const sideDishTypes: SideDishTypes = [
    { value: 'potatoes', label: 'Картошка' },
    { value: 'buckwheat', label: 'Гречка' },
    { value: 'pasta', label: 'Паста' },
    { value: 'spagetti', label: 'Спагетти' },
    { value: 'rice', label: 'Рис' },
    { value: 'cabbage', label: 'Капуста' },
    { value: 'beans', label: 'Фасоль' },
    { value: 'otherVegetables', label: 'Другие овощи' },
];
