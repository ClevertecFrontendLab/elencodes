import { useNavigate } from 'react-router';

import { PATHS } from '~/app/routes/paths.ts';
import { ResponsiveRecipeGrid, SectionWrapper } from '~/components';
import { DATA_TEST_ID } from '~/constants/data-test-ids';
import { JUICIEST_PARAMS } from '~/query/constants/recipe-consts.ts';
import { useGetRecipesQuery } from '~/query/services/recipes/recipes-api.ts';

export const JuiciestSection = () => {
    const navigate = useNavigate();
    const { data } = useGetRecipesQuery(JUICIEST_PARAMS);
    const juiciestItems = data?.data ?? [];

    const handleNavigate = () => {
        navigate(PATHS.JUICIEST);
    };

    return juiciestItems.length > 0 ? (
        <SectionWrapper
            title='Самое сочное'
            buttonLabel='Вся подборка'
            onButtonClick={handleNavigate}
            dataTestId={DATA_TEST_ID.JUICIEST_LINK}
            dataTestIdMob={DATA_TEST_ID.JUICIEST_LINK_MOB}
        >
            <ResponsiveRecipeGrid recipes={juiciestItems} />
        </SectionWrapper>
    ) : null;
};
