import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type ActionRoundButtonProps = {
    ariaLabel: string;
    icon: ComponentWithAs<'svg', IconProps>;
    boxSize?: string;
    text?: string;
};
