import { Box, Show } from '@chakra-ui/icons';
import { Heading, Text } from '@chakra-ui/react';

import { CardTextContentType } from '~/types/CardTextContentType';

import { cardContentTitleStyles } from './CardTextContent.styles';
import { cardContentTextStyles } from './CardTextContent.styles';

export const CardTextContent = ({
    title,
    text,
    showTextAbove = 'lg',
    mobileH = '48px',
    linesTitleOnMobile = 2,
}: CardTextContentType) => (
    <Box overflow='hidden' h={{ base: mobileH, lg: '100px' }}>
        <Heading
            as='h3'
            noOfLines={{ base: linesTitleOnMobile, lg: 1 }}
            wordBreak={{ base: 'normal', lg: 'break-all' }}
            sx={cardContentTitleStyles}
        >
            {title}
        </Heading>
        <Show above={showTextAbove}>
            <Text noOfLines={3} sx={cardContentTextStyles}>
                {text}
            </Text>
        </Show>
    </Box>
);
