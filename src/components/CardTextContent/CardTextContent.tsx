import { Box, Show } from '@chakra-ui/icons';
import { Heading, Text } from '@chakra-ui/react';

import { selectFilters } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

import { highlightText } from '../../utils/text';
import { cardContentTextStyles, cardContentTitleStyles } from './CardTextContent.styles';

type CardTextContentPropsType = {
    title: string;
    description: string;
    showTextAbove?: string;
    mobileH?: string;
    linesTitleOnMobile?: number;
    isMainCard?: boolean;
};

export const CardTextContent = ({
    title,
    description,
    showTextAbove = 'lg',
    mobileH = '48px',
    linesTitleOnMobile = 2,
    isMainCard = true,
}: CardTextContentPropsType) => {
    const filter = useAppSelector(selectFilters);
    const titleWithHighlightedText = highlightText(title, filter.searchQuery);

    return (
        <Box overflow='hidden' minH={{ base: mobileH, xl: '100px' }}>
            <Heading
                as='h3'
                sx={cardContentTitleStyles}
                noOfLines={{ base: linesTitleOnMobile, xl: 1 }}
                wordBreak={{ base: 'normal', xl: 'break-all' }}
            >
                {isMainCard && filter.isSearchModeOnPage ? (
                    <>{titleWithHighlightedText}</>
                ) : (
                    <>{title}</>
                )}
            </Heading>
            <Show above={showTextAbove}>
                <Text fontSize='sm' sx={cardContentTextStyles} noOfLines={3}>
                    {description}
                </Text>
            </Show>
        </Box>
    );
};
