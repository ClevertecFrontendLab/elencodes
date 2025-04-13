import { SystemStyleObject } from '@chakra-ui/react';

export const tabListBoxStyles: SystemStyleObject = {
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    color: 'lime.800',
    '& > button:not([aria-selected=true])': {
        borderBottom: '1px solid',
        borderColor: 'blackAlpha.200',
    },
    '& > [aria-selected=true]': {
        borderBottom: '2px solid',
        borderColor: 'lime.600',
    },
};
