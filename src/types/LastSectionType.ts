import { FirstCardsDataType } from './FirstCardsDataType';
import { SecondCardsDataType } from './SecondCardsDataType';

export type LastSectionPropsType = {
    title: string;
    text: string;
    firstCardsData: FirstCardsDataType[];
    secondCardsData: SecondCardsDataType[];
};
