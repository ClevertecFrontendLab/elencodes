import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type MenuItemTagType = {
    icon: ComponentWithAs<'svg', IconProps>;
    title: string;
    bgColor: string;
    mobilePos?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static';
};
