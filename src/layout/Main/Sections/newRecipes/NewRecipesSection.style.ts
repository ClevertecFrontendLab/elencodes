import { SystemStyleObject } from '@chakra-ui/react';

export const newRecipesSectionStyles: SystemStyleObject = {
    pos: 'relative',
    mt: { base: '0.75rem', lg: '1.5rem' },
};

export const cardBoxStyles: SystemStyleObject = {
    gap: { base: '12px', xxl: '24px' },
    p: '0 0 8px 0',
    overflow: 'hidden',
};

export const sectionArrowLeftStyles: SystemStyleObject = {
    pos: 'absolute',
    left: '-8px',
    top: '148px',
    w: { base: '40px', xxl: '48px' },
    h: { base: '40px', xxl: '48px' },
    bg: 'black',
    _hover: { bg: 'black' },
};

export const sectionArrowRightStyles: SystemStyleObject = {
    pos: 'absolute',
    right: '-8px',
    top: '148px',
    w: { base: '40px', xxl: '48px' },
    h: { base: '40px', xxl: '48px' },
    bg: 'black',
    _hover: { bg: 'black' },
};
