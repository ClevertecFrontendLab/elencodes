import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type ActionCounterPropsType = {
    countClick: number;
    icon: ComponentWithAs<'svg', IconProps>;
    spacing: string;
    padding: string;
    fontSize?: string;
};
