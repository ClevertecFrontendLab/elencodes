import { SearchingContent } from '~/components/SearchingContent/SearchingContent';
import { veganCuisineData } from '~/data/homePage/veganCuisineData.ts';
import { veganCuisineDataShort } from '~/data/homePage/veganCuisineDataShort.ts';
import { theJuciestPageMainCardsData } from '~/data/theJuciestPage/theJuciestPageMainCardsData.ts';
import { LastSection } from '~/layout/Main/Sections/lastSection/LastSection';
import { MainSection } from '~/layout/Main/Sections/mainSection/MainSection';

export const TheJuciestPage = () => (
    <>
        <SearchingContent title='Самое сочное' />
        <MainSection
            onClick={() => {}}
            displayButton='block'
            buttonTitle='Загрузить еще'
            sizeButton='md'
            mainSectionData={theJuciestPageMainCardsData}
        />
        <LastSection
            title='Веганская кухня'
            text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            firstCardsData={veganCuisineData}
            secondCardsData={veganCuisineDataShort}
        />
    </>
);
