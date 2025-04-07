import { chakra, ChakraComponent, Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import BreadCrumb from '../BreadCrumb/BreadCrumb';
import BurgerButton from '../Buttons/BurgerButton/BurgerButton';
import Logo from '../Logo/Logo';
import UserProfile from '../UserProfile/UserProfile';
import headerStyles from './Header.styles';

const HeaderChakra: ChakraComponent<'header', object> = chakra('header');

function Header(): ReactElement {
    return (
        <HeaderChakra sx={headerStyles.wrapper} data-test-id='header'>
            <Flex sx={headerStyles.inner}>
                <Logo />
                <BreadCrumb />
            </Flex>
            <UserProfile />
            <BurgerButton />
        </HeaderChakra>
    );
}

export default Header;
