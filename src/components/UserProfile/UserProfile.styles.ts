import { SystemStyleObject } from '@chakra-ui/react';

export const userProfileWrapper: SystemStyleObject = {
    display: { base: 'none', lg: 'flex' },
    padding: '16px 0',
    gap: '12px',
};

export const userCard: SystemStyleObject = {
    bg: 'unset',
    shadow: 'unset',
    borderRadius: 'unset',
    height: '48px',
};

export const headingStyles: SystemStyleObject = {
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 'medium',
    lineHeight: '156%',
    color: '#000000',
};

export const textStyles: SystemStyleObject = {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '143%',
    color: '#000000a3',
};
