import { Heading } from '@chakra-ui/react';

import { SectionTitlePropsType } from '~/types/SectionTitleType';

import { sectionTitleStyles } from './SectionTitle.style';

export const SectionTitle = ({ title }: SectionTitlePropsType) => (
    <Heading as='h2' sx={sectionTitleStyles}>
        {title}
    </Heading>
);
