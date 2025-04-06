import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import BreadCrumb from '../BreadCrumb/BreadCrumb';
import Logo from '../Logo/Logo';
import UserProfile from '../UserProfile/UserProfile';

function Header(): ReactElement {
    return (
        <Flex
            as='header'
            alignItems='center'
            justifyContent='space-between'
            paddingLeft='16px'
            bgColor='#FFFFD3'
            data-test-id='header'
            paddingRight='56px'
        >
            <Logo />
            <Flex width='1105px' alignItems='center' justifyContent='space-between'>
                <BreadCrumb />
                <UserProfile />
            </Flex>
        </Flex>
    );
}

export default Header;
