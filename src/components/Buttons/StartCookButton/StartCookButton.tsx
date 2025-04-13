import { Button } from '@chakra-ui/react';

import { startCookButtonStyles } from './StartCookButton.styles';

export const StartCookButton = () => (
    <Button size={{ base: 'xs', lg: 'sm' }} sx={startCookButtonStyles}>
        Готовить
    </Button>
);
