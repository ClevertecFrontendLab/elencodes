import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type NavMenuItemDataType = {
    id: number;
    title: string;
    icon: ComponentWithAs<'svg', IconProps>;
    listItems: string[];
    linkTo?: string;
};

export type NavMenuItemPropsType = NavMenuItemDataType & {
    index: number;
    expandedIndex: number | null;
};
