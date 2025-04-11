import { Box, Show } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';

import { NewRecipesCard } from '~/components/Cards/NewRecipesCard/NewRecipesCard';
import { SectionTitle } from '~/components/SectionTitle/SectionTitle';
import { newRecipesCardsData } from '~/data/homePage/newRecipesCardsData';
import ArrowLeftIcon from '~/icons/SwipeSectionIcons/ArrowLeftIcon';
import ArrowRightIcon from '~/icons/SwipeSectionIcons/ArrowRightIcon';

import {
    cardBoxStyles,
    newRecipesSectionStyles,
    sectionArrowLeftStyles,
    sectionArrowRightStyles,
} from './NewRecipesSection.style';

export const NewRecipesSection = () => (
    <Box as='section'>
        <SectionTitle title='Новые рецепты' />
        <Box sx={newRecipesSectionStyles}>
            <Flex sx={cardBoxStyles}>
                {newRecipesCardsData.map((el) => (
                    <NewRecipesCard key={el.id} {...el} />
                ))}
            </Flex>
            <Show above='lg'>
                <IconButton
                    aria-label='Arrow Left'
                    icon={<ArrowLeftIcon boxSize={{ base: '20px', xxl: '24px' }} />}
                    sx={sectionArrowLeftStyles}
                />
                <IconButton
                    aria-label='Arrow Right'
                    icon={<ArrowRightIcon boxSize={{ base: '20px', xxl: '24px' }} />}
                    sx={sectionArrowRightStyles}
                />
            </Show>
        </Box>
    </Box>
);
