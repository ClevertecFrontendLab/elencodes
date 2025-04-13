import { SearchingContent } from '~/components/SearchingContent/SearchingContent';
import { TabMenu } from '~/components/TabMenu/TabMenu';
import { navMenuItemsData } from '~/data/navMenu/navMenuItemsData';
import { dessertsData } from '~/data/veganCuisinePage/dessertsData';
import { dessertsDataShort } from '~/data/veganCuisinePage/dessertsDataShort';
import { veganCuisinePageMainCardsData } from '~/data/veganCuisinePage/veganCuisinePageMainCardsData';

import { LastSection } from '../Main/Sections/lastSection/LastSection';
import { MainSection } from '../Main/Sections/mainSection/MainSection';

export const VeganCuisinePage = () => (
    <>
        <SearchingContent title='Веганская кухня'>
            Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
            вегетарианскую диету и готовить вкусные вегетарианские блюда.
        </SearchingContent>
        <TabMenu tabsList={navMenuItemsData[6].listItems} />
        <MainSection
            onClick={() => {}}
            displayButton='block'
            buttonTitle='Загрузить еще'
            sizeButton='md'
            mainSectionData={veganCuisinePageMainCardsData}
        />
        <LastSection
            title='Десерты, выпечка'
            text='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
            firstCardsData={dessertsData}
            secondCardsData={dessertsDataShort}
        />
    </>
);
