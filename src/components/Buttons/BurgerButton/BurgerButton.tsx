import { IconButton } from '@chakra-ui/react';
import { ReactElement } from 'react';

import BurgerIcon from '~/components/CustomIcons/BurgerIcon';

import { burgerButtonStyles } from './BurgerButton.styles';

function BurgerButton(): ReactElement {
    return <IconButton icon={<BurgerIcon />} aria-label='Menu' sx={burgerButtonStyles} />;
}

export default BurgerButton;
