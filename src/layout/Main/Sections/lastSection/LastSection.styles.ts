import { SystemStyleObject } from '@chakra-ui/react';

export const lastSectionBoxStyles: SystemStyleObject = {
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
};

export const lastSectionGridTitleStyles: SystemStyleObject = {
    mt: { base: 2, lg: 6 },
    mb: { base: 4, lg: 6 },
    gap: { base: 3, lg: 0 },
    gridTemplateColumns: { base: '1fr', lg: '1fr 2fr', xxl: '1fr 1fr' },
};

export const lastSectionSubtitleStyles: SystemStyleObject = {
    fontSize: { base: '14', lg: '16' },
    fontWeight: 'medium',
    lineHeight: { lg: '150%' },
    color: 'blackAlpha.700',
};

export const lastSectionGridCardsStyles: SystemStyleObject = {
    gridTemplateColumns: { base: '1fr', md: '2fr 1fr', xxl: '1fr 1fr' },
    gap: { base: 3, xl: 4, xxl: 6 },
};

export const lastSectionVeganCardBoxStyles: SystemStyleObject = {
    gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
    gap: { base: 3, xl: 4, xxl: 6 },
};

export const lastSectionRecipeCardBoxStyles: SystemStyleObject = {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: { base: 3, md: 1.5, xl: 3 },
};
