import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type RecipeCardPropsType = {
    title: string;
    icon: ComponentWithAs<'svg', IconProps>;
};
