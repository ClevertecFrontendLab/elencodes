import { SystemStyleObject } from '@chakra-ui/react';

const headerStyles: Record<'wrapper' | 'inner', SystemStyleObject> = {
    wrapper: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: { base: '64px', md: '80px' },
        paddingLeft: { base: '16px', md: '20px' },
        paddingRight: { base: '16px', md: '56px' },
        backgroundColor: '#FFFFD3',
    },
    inner: {
        width: '1105px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};

export default headerStyles;
