import { SystemStyleObject } from '@chakra-ui/react';

export const avatarBoxWrapperStyles: SystemStyleObject = {
    marginRight: '80px',
    alignItems: 'center',
};

export const avatarStyles: SystemStyleObject = {
    mr: { base: 2, lg: 3 },
    height: { base: '32px', lg: '48px' },
    width: { base: '32px', lg: '48px' },
};

export const headingStyles: SystemStyleObject = {
    fontFamily: 'Inter',
    fontSize: { base: '16', lg: '18' },
    fontWeight: 'medium',
    lineHeight: '156%',
    color: 'black',
};

export const textStyles: SystemStyleObject = {
    fontSize: { base: '12', lg: '14' },
    lineHeight: { base: '133%', lg: '143%' },
    color: 'blackAlpha.700',
};
