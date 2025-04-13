import { SystemStyleObject } from '@chakra-ui/react';

export const titleSectionBoxStyles: SystemStyleObject = {
    alignItems: 'center',
    mb: { base: '0.75rem', lg: '1.5rem' },
};

export const sectionButtonStyles: SystemStyleObject = {
    size: { base: 'sm', md: 'md', xxl: 'lg' },
    display: { base: 'none', lg: 'flex' },
    fontSize: { base: '16', xxl: '18' },
    bg: 'lime.300',
    _hover: { bg: 'lime.50' },
};
