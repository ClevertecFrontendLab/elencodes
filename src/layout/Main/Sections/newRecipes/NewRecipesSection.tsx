import 'swiper/css';
import 'swiper/css/navigation';

import { Box } from '@chakra-ui/icons';

import { SectionTitle } from '~/components/SectionTitle/SectionTitle';
import { Slider } from '~/components/Slider/Slider';

export const NewRecipesSection = () => (
    <Box as='section'>
        <SectionTitle title='Новые рецепты' />
        <Slider />
    </Box>
);
