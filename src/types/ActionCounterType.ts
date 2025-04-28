import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type ActionCounterPropsType = {
    countClick: number;
    icon: ComponentWithAs<'svg', IconProps>;
    spacing: string | { [key: string]: string };
    padding: string | { [key: string]: string };
    fontSize?: string | { [key: string]: string };
    boxSize?: string | { [key: string]: string };
};
