import { ReactNode } from 'react';

import { MainSectionDataType } from '~/types/HorizontalCardType';

export type MainSectionPropsType = {
    mainSectionData: MainSectionDataType[];
    children?: ReactNode;
    buttonTitle: string;
    sizeButton: string;
    displayButton: string | { base: string; lg: string };
    showRightIcon?: boolean;
    onClick: () => void;
    dataTestId?: string | undefined;
};
