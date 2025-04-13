import { SystemStyleObject } from '@chakra-ui/react';

export const headerStyles: Record<'wrapper' | 'inner', SystemStyleObject> = {
    wrapper: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: { base: '64px', lg: '80px' },
        paddingLeft: { base: '16px', md: '20px' },
        paddingRight: { base: '16px', md: '56px', lg: '80px' },
        backgroundColor: 'lime.50',
    },
    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};

export const ActionCounterWrapperStyles: SystemStyleObject = {
    display: { base: 'flex', lg: 'none' },
};
