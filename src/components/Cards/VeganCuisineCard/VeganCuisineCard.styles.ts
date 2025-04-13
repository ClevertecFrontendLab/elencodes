import { SystemStyleObject } from '@chakra-ui/react';

export const lastSectionCardStyles: SystemStyleObject = {
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    boxShadow: 'none',
    overflow: 'hidden',
    _hover: {
        boxShadow: '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        cursor: 'pointer',
    },
};

export const lastSectionCardBodyStyles: SystemStyleObject = {
    p: { base: '12px', lg: '16px', xxl: '24px 24px 20px 24px' },
};

export const menuItemTagBoxStyles: SystemStyleObject = {
    justifyContent: 'space-between',
};

export const actionCounterBox: SystemStyleObject = {
    gap: '8px',
};
