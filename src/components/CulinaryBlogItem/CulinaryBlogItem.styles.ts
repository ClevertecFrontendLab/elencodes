import { SystemStyleObject } from '@chakra-ui/react';

export const culinaryBlogItemBoxStyles: SystemStyleObject = {
    p: { base: 4, xxl: '24px 24px 20px 24px' },
    bg: 'white',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    boxShadow: 'none',
    overflow: 'hidden',
    _hover: {
        boxShadow: '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        cursor: 'pointer',
    },
};

export const culinaryBlogItemTextStyles: SystemStyleObject = {
    mt: { base: 4, '2xl': 7 },
};
