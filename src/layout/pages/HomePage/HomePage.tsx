import { useNavigate } from 'react-router';

import { TitleSectionWithButton } from '~/components/Buttons/TitleSectionWithButton/TitleSectionWithButton';
import { SearchingContent } from '~/components/SearchingContent/SearchingContent';
import { theJuciestCardsData } from '~/data/homePage/theJuciestCardsData';
import { veganCuisineData } from '~/data/homePage/veganCuisineData';
import { veganCuisineDataShort } from '~/data/homePage/veganCuisineDataShort';
import { CulinaryBlogs } from '~/layout/Main/Sections/culinaryBlogs/CulinaryBlogs';
import { LastSection } from '~/layout/Main/Sections/lastSection/LastSection';
import { NewRecipesSection } from '~/layout/Main/Sections/newRecipes/NewRecipesSection';
import { MainSection } from '~/layout/Main/Sections/theJuciest/MainSection';

export const HomePage = () => {
    const navigate = useNavigate();

    const showTheJuciest = () => {
        navigate('/juciest');
    };

    return (
        <>
            <SearchingContent title='Приятного аппетита!' />
            <NewRecipesSection />
            <TitleSectionWithButton onClick={showTheJuciest} />
            <MainSection
                buttonTitle='Вся подборка'
                sizeButton='md'
                displayButton={{ base: 'flex', lg: 'none' }}
                mainSectionData={theJuciestCardsData}
                showRightIcon={true}
                onClick={showTheJuciest}
                dataTestId='juiciest-link-mobile'
            />
            <CulinaryBlogs />
            <LastSection
                title='Веганская кухня'
                text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
                firstCardsData={veganCuisineData}
                secondCardsData={veganCuisineDataShort}
            />
        </>
    );
};
