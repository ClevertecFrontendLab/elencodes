import { RecipeType } from './recipeType';

export type MainSectionPropsType = {
    buttonTitle: string;
    sizeButton: string;
    displayButton: string | { base: string; lg: string };
    showRightIcon?: boolean;
    onClick: () => void;
    dataTestId?: string | undefined;
    recipes: RecipeType[];
};
