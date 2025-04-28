import { IconProps } from '@chakra-ui/icons';
import { ComponentWithAs } from '@chakra-ui/react';

import { ActionCounterPropsType } from './ActionCounterType';

export type HorizontalCardType = {
    img: string;
    altImg: string;
    title: string;
    description: string;
    iconCounters: ActionCounterPropsType[];
    tagIcon: ComponentWithAs<'svg', IconProps>;
    tagTitle: string;
    bgColorTag: string;
};

export type MainSectionDataType = HorizontalCardType & {
    id: number;
};
