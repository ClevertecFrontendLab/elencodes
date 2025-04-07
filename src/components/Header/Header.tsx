import { chakra, ChakraComponent, Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import BreadCrumb from '../BreadCrumb/BreadCrumb';
import Logo from '../Logo/Logo';
import UserProfile from '../UserProfile/UserProfile';
import headerStyles from './Header.styles';

const HeaderChakra: ChakraComponent<'header', object> = chakra('header');

function Header(): ReactElement {
    return (
        <HeaderChakra sx={headerStyles.wrapper} data-test-id='header'>
            <Logo />
            <Flex sx={headerStyles.inner}>
                <BreadCrumb />
                <UserProfile />
            </Flex>
        </HeaderChakra>
    );
}

export default Header;
