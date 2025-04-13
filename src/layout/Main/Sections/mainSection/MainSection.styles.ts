import { SystemStyleObject } from '@chakra-ui/react';

export const mainSectionBoxStyles: SystemStyleObject = {
    gap: { base: 3, md: 4, xxl: 6 },
    flexWrap: 'wrap',
    flexDirection: { base: 'column', md: 'row' },
};

export const mainSectionButtonStyles: SystemStyleObject = {
    m: '12px auto 0',
    bg: 'lime.300',
    _hover: { bg: 'lime.50' },
};
