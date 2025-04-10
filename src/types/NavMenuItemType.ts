import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type NavMenuItemPropsType = {
    id?: number;
    title: string;
    icon: ComponentWithAs<'svg', IconProps>;
    listItems: string[];
    linkTo?: string;
};
