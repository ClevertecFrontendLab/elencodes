import { useNavigate } from 'react-router';

import { TitleSectionWithButton } from '~/components/Buttons/TitleSectionWithButton/TitleSectionWithButton';
import { SearchingContent } from '~/components/SearchingContent/SearchingContent';
import { theJuciestCardsData } from '~/data/homePage/theJuciestCardsData';
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
        </>
    );
};
