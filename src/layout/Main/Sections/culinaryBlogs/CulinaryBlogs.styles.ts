import { SystemStyleObject } from '@chakra-ui/react';

export const culinaryBlogsWrapperStyles: SystemStyleObject = {
    position: 'relative',
    p: { base: '12px 12px 64px 12px', xl: 6 },
    bg: 'lime.300',
    borderRadius: '16',
};

export const culinaryBlogsSectionStyles: SystemStyleObject = {
    justifyContent: 'space-between',
    mb: { base: '12px', lg: '16px', xxl: '24px' },
};

export const culinaryBlogsTitleStyles: SystemStyleObject = {
    fontSize: { base: '24', lg: '30', xl: '36' },
    fontWeight: 'medium',
    lineHeight: { base: '133%', lg: '120%', xl: '111%' },
};

export const culinaryBlogsButtonStyles: SystemStyleObject = {
    position: { base: 'absolute', lg: 'static' },
    zIndex: '1',
    bottom: { base: '12px', lg: 'auto' },
    left: { base: '50%', lg: 'auto' },
    fontSize: { base: '16', xxl: '18' },
    lineHeight: { base: '150%', xxl: '156%' },
    bg: 'lime.300',
    _hover: { bg: 'lime.50' },
    transform: { base: 'translate(-50%)', lg: 'none' },
};

export const culinaryBlogsCardsBoxStyles: SystemStyleObject = {
    gap: { base: 3, lg: 4 },
    flexDirection: { base: 'column', md: 'row' },
};
