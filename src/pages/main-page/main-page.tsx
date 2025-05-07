import { useNavigate } from 'react-router';

import { PATHS } from '~/app/routes/paths.ts';
import {
    BlogsSection,
    CategoryPageLayout,
    CategoryPreviewSection,
    FilteredResultsSection,
    JuiciestSection,
    NewestRecipes,
    SectionWrapper,
} from '~/components';
import { BLOGS } from '~/constants';
import { useAppSelector } from '~/redux/hooks.ts';
import { selectFilteredRecipes } from '~/redux/slices/recipes-slice.ts';

export const MainPage = () => {
    const navigate = useNavigate();
    const filteredRecipes = useAppSelector(selectFilteredRecipes);

    if (filteredRecipes.length) {
        return (
            <CategoryPageLayout title='Приятного аппетита!'>
                <FilteredResultsSection />
            </CategoryPageLayout>
        );
    }

    return (
        <CategoryPageLayout title='Приятного аппетита!'>
            <NewestRecipes />
            <JuiciestSection />
            <SectionWrapper
                title='Кулинарные блоги'
                buttonLabel='Все авторы'
                theme='lime'
                onButtonClick={() => navigate(PATHS.ROOT)}
            >
                <BlogsSection blogs={BLOGS} />
            </SectionWrapper>
            <CategoryPreviewSection />
        </CategoryPageLayout>
    );
};
