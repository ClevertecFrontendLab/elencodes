import { SystemStyleObject } from '@chakra-ui/react';

export const userProfileWrapper: SystemStyleObject = {
    display: { base: 'none', lg: 'flex' },
    padding: '16px 0',
    gap: '12px',
};

export const avatarBoxStyles: SystemStyleObject = {
    height: '48px',
    width: '48px',
};

export const avatarStyles: SystemStyleObject = {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
};

export const userCard: SystemStyleObject = {
    bg: 'unset',
    shadow: 'unset',
    borderRadius: 'unset',
    height: '48px',
};

export const cardHeaderStyles: SystemStyleObject = {
    padding: '0',
};

export const cardBodyStyles: SystemStyleObject = {
    padding: '0',
};

export const headingStyles: SystemStyleObject = {
    fontFamily: 'Inter',
    fontSize: '18',
    fontWeight: 'medium',
    lineHeight: '156%',
    color: 'black',
};

export const textStyles: SystemStyleObject = {
    lineHeight: '143%',
    color: 'blackAlpha.700',
};
