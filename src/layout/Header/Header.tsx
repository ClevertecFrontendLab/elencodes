import { chakra, ChakraComponent, Flex, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { NavLink } from 'react-router';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import BookmarkIcon from '~/icons/CounterIcons/BookmarkIcon';
import FriendsIcon from '~/icons/CounterIcons/FriendsIcon';
import ReactionIcon from '~/icons/CounterIcons/ReactionIcon';

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import BurgerButton from '../../components/Buttons/BurgerButton/BurgerButton';
import Logo from '../../components/Logo/Logo';
import UserProfile from '../../components/UserProfile/UserProfile';
import { headerStyles } from './Header.styles';
import { ActionCounterWrapperStyles } from './Header.styles';

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
            <HStack sx={ActionCounterWrapperStyles} px={{ base: '8px', sm: '12px' }} spacing={0}>
                <ActionCounter
                    icon={BookmarkIcon}
                    countClick={185}
                    spacing='6px'
                    padding='4px 8px'
                />
                <ActionCounter
                    icon={FriendsIcon}
                    countClick={589}
                    spacing='6px'
                    padding='4px 8px'
                />
                <ActionCounter
                    icon={ReactionIcon}
                    countClick={587}
                    spacing='6px'
                    padding='4px 8px'
                />
            </HStack>
            <BurgerButton />
        </HeaderChakra>
    );
}

export default Header;
