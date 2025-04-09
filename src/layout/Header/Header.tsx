import { chakra, ChakraComponent, Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { NavLink } from 'react-router';

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import BurgerButton from '../../components/Buttons/BurgerButton/BurgerButton';
import Logo from '../../components/Logo/Logo';
import UserProfile from '../../components/UserProfile/UserProfile';
import headerStyles from './Header.styles';

const HeaderChakra: ChakraComponent<'header', object> = chakra('header');

function Header(): ReactElement {
    return (
        <HeaderChakra sx={headerStyles.wrapper} data-test-id='header'>
            <Flex sx={headerStyles.inner}>
                <NavLink to='/'>
                    <Logo />
                </NavLink>
                <BreadCrumb />
            </Flex>
            <UserProfile />
            <BurgerButton />
        </HeaderChakra>
    );
}

export default Header;
