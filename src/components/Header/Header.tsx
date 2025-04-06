import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import BreadCrumb from '../BreadCrumb/BreadCrumb';
import Logo from '../Logo/Logo';
import UserProfile from '../UserProfile/UserProfile';

function Header(): ReactElement {
    return (
        <Flex alignItems='center'>
            <Logo />
            <BreadCrumb />
            <UserProfile />
        </Flex>
    );
}

export default Header;
