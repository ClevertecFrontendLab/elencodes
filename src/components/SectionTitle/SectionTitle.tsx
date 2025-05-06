import { Heading } from '@chakra-ui/react';

import { sectionTitleStyles } from './SectionTitle.styles';

type SectionTitlePropsType = {
    title: string;
};

export const SectionTitle = ({ title }: SectionTitlePropsType) => (
    <Heading as='h2' sx={sectionTitleStyles}>
        {title}
    </Heading>
);
