import { SystemStyleObject } from '@chakra-ui/react';

export const horizontalCardStyles: SystemStyleObject = {
    flex: {
        base: '0 0 100%',
        md: '0 0 calc(50% - 8px)',
        lg: '0 0 100%',
        xxl: '0 0 calc(50% - 12px)',
    },
    flexDirection: 'row',
    minWidth: '0',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    boxShadow: 'none',
    overflow: 'hidden',
    _hover: {
        boxShadow: '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        cursor: 'pointer',
    },
};

export const horizontalCardBoxImgStyles: SystemStyleObject = {
    h: { base: '128px', lg: '230px', xxl: '244px' },
    overflow: 'hidden',
};

export const horizontalCardImgStyles: SystemStyleObject = {
    w: { base: '158px', lg: '346px' },
    h: '100%',
    p: '0',
    objectFit: 'cover',
    overflow: 'hidden',
};

export const horizontalCardBodyStyles: SystemStyleObject = {
    p: { base: '8px 8px 4px 8px', lg: '12px', xxl: '16px 24px 20px 24px' },
};

export const actionCounterBox: SystemStyleObject = {
    gap: '8px',
};

export const horizontalCardHeaderStyles: SystemStyleObject = {
    justifyContent: 'space-between',
};

export const horizontalCardBoxButtonStyles: SystemStyleObject = {
    justifyContent: 'flex-end',
    gap: { base: '12px', lg: '8px' },
};
