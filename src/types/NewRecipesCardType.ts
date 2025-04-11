import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

import { ActionCounterPropsType } from './ActionCounterType';

export type NewRecipesCardDataType = {
    id: number;
    img: string;
    altImg: string;
    title: string;
    text: string;
    iconCounters: ActionCounterPropsType[];
    tagIcon: ComponentWithAs<'svg', IconProps>;
    tagTitle: string;
    bgColorTag: string;
};
