import { FirstCardsDataType } from './FirstCardsDataType';
import { SecondCardsDataType } from './SecondCardsDataType';

export type LastSectionPropsType = {
    title: string;
    description: string;
    firstCardsData: FirstCardsDataType[];
    secondCardsData: SecondCardsDataType[];
};
