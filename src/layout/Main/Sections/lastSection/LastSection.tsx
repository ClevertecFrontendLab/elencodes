import { Box, Grid } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';

import { RecipeCard } from '~/components/Cards/RecipeCard/RecipeCard';
import { VeganCuisineCard } from '~/components/Cards/VeganCuisineCard/VeganCuisineCard';
import { SectionTitle } from '~/components/SectionTitle/SectionTitle';
import { FirstCardsDataType } from '~/types/firstCardsDataType';
import { SecondCardsDataType } from '~/types/secondCardsDataType';

import {
    lastSectionBoxStyles,
    lastSectionGridCardsStyles,
    lastSectionGridTitleStyles,
    lastSectionRecipeCardBoxStyles,
    lastSectionSubtitleStyles,
    lastSectionVeganCardBoxStyles,
} from './lastSection.styles';

type LastSectionPropsType = {
    title: string;
    description: string;
    firstCardsData: FirstCardsDataType[];
    secondCardsData: SecondCardsDataType[];
};

export const LastSection = ({
    title,
    description,
    firstCardsData,
    secondCardsData,
}: LastSectionPropsType) => (
    <Box as='section' sx={lastSectionBoxStyles}>
        <Grid sx={lastSectionGridTitleStyles}>
            <Box pr={2}>
                <SectionTitle title={title} />
            </Box>
            <Text sx={lastSectionSubtitleStyles}>{description}</Text>
        </Grid>
        <Grid sx={lastSectionGridCardsStyles}>
            <Grid sx={lastSectionVeganCardBoxStyles}>
                {firstCardsData.map((i) => (
                    <VeganCuisineCard key={i.id} {...i} />
                ))}
            </Grid>
            <Flex sx={lastSectionRecipeCardBoxStyles}>
                {secondCardsData.map((i) => (
                    <RecipeCard key={i.id} {...i} />
                ))}
            </Flex>
        </Grid>
    </Box>
);
