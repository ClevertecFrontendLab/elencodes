import { SystemStyleObject } from '@chakra-ui/react';

export const cardStyles: SystemStyleObject = {
    w: { base: '158px', lg: '277px', xxl: '322px' },
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    boxShadow: 'none',
    overflow: 'hidden',
    _hover: {
        boxShadow: '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        cursor: 'pointer',
    },
};

export const cardBoxImageStyles: SystemStyleObject = {
    position: 'relative',
    h: { base: '128px', lg: '230px' },
    overflow: 'hidden',
};

export const cardImageStyles: SystemStyleObject = {
    maxHeight: '230px',
    w: '100%',
    h: '100%',
    objectFit: 'cover',
    p: '0',
};

export const cardBodyStyles: SystemStyleObject = {
    p: { base: '8px 8px 4px 8px', lg: '12px', xxl: '16px 24px 24px 24px' },
};

export const cardItemTagBoxStyles: SystemStyleObject = {
    justifyContent: 'space-between',
};

export const cardItemTagCounterBoxStyles: SystemStyleObject = {
    gap: '8px',
};
