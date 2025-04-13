import { SystemStyleObject } from '@chakra-ui/react';

export const recipeCardStyles: SystemStyleObject = {
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    boxShadow: 'none',
    overflow: 'hidden',
    _hover: {
        boxShadow: '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        cursor: 'pointer',
    },
};

export const recipeCardBodyStyles: SystemStyleObject = {
    p: { base: '10px 12px', lg: '12px', xxl: '12px 24px' },
};

export const recipeCardTitleStyles: SystemStyleObject = {
    fontSize: { base: '16', lg: '18', xxl: '20' },
    fontWeight: 'semibold',
    lineHeight: { base: '150%', lg: '156%', xxl: '140%' },
    flexGrow: '1',
};
