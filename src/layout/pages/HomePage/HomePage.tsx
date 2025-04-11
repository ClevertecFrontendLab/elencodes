import { SearchingContent } from '~/components/SearchingContent/SearchingContent';
import { NewRecipesSection } from '~/layout/Main/Sections/newRecipes/NewRecipesSection';

export const HomePage = () => (
    <>
        <SearchingContent title='Приятного аппетита!' />
        <NewRecipesSection />
    </>
);
