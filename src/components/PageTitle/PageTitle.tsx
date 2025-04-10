import { Box, Heading, Text } from '@chakra-ui/react';

import { PageTitlePropsType } from '~/types/PageTitleType';

import { PageTitleStyles } from './PageTitle.style';
import { PageSubTitleStyles } from './PageTitle.style';

export const PageTitle = ({ title, children }: PageTitlePropsType) => (
    <Box>
        <Heading as='h1' sx={PageTitleStyles}>
            {title}
        </Heading>
        {children && <Text sx={PageSubTitleStyles}>{children}</Text>}
    </Box>
);
