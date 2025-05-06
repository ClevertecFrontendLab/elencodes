import { Show } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

import { BookmarkIcon } from '~/icons/counterIcons/bookmarkIcon';

import { saveButtonStyles } from './SaveButton.styles';

export const SaveButton = () => (
    <Button
        colorScheme='black'
        size={{ base: 'xs', lg: 'sm' }}
        variant='outline'
        leftIcon={<BookmarkIcon />}
        sx={saveButtonStyles}
    >
        <Show above='lg'>Сохранить</Show>
    </Button>
);
