import { SystemStyleObject } from '@chakra-ui/react';

export const SideBarWrapperStyles: SystemStyleObject = {
    pos: 'fixed',
    right: '0',
    bottom: '0',
    top: { base: '64px', xl: '80px' },
    w: '208px',
};

export const SideBarActionCounterWrapperStyles: SystemStyleObject = {
    gap: '24px',
    pt: '16px',
};

export const actionRoundWrapperStyles: SystemStyleObject = {
    h: { base: '84px', lg: '208px' },
    w: { base: '90px', md: '192px', lg: '208px' },
    background: 'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 80%)',
    flexDir: 'column',
};

export const actionRoundButtonStyles: SystemStyleObject = {
    mb: { base: '4px', lg: '12px' },
    boxSize: { base: '40px', lg: '48px' },
    variant: 'solid',
    bg: 'black',
    _hover: { bg: 'blackAlpha.800' },
};

export const actionRoundButtonTextStyles: SystemStyleObject = {
    fontSize: '12',
    lineHeight: { base: '133%' },
    color: 'blackAlpha.700',
};
