import { Button, IconButton } from '@chakra-ui/react';

import { useScreenSize } from '~/hooks/use-screen-size.tsx';
import { BookmarkIcon } from '~/icons/counter-icons/bookmark-icon';

export const SaveButton = () => {
    const { isTablet } = useScreenSize();

    return isTablet ? (
        <IconButton aria-label='Сохранить' icon={<BookmarkIcon />} size='xs' variant='outline' />
    ) : (
        <Button size='sm' variant='outline' leftIcon={<BookmarkIcon />}>
            Сохранить
        </Button>
    );
};
