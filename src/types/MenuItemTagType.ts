import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type MenuItemTagPropsType = {
    bgColor: string;
    category?: string | string[];
    icon?: ComponentWithAs<'svg', IconProps>;
    title?: string;
};
