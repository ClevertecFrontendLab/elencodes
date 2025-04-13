import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

export type SecondCardsDataType = {
    id: number;
    icon: ComponentWithAs<'svg', IconProps>;
    title: string;
};
