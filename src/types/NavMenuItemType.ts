import { SubcategoryType } from './recipeType';

export type NavMenuItemPropsType = {
    id: string;
    icon: string;
    name: string;
    nameEn: string;
    subcategories: SubcategoryType[];
    closeBurgerMenu?: () => void;
};
