import { Flex, HStack, Show, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { AvatarWithName } from '~/components/AvatarWithName/AvatarWithName';
import { BreadCrumbs } from '~/components/BreadCrumbs/BreadCrumbs';
import { BookmarkIcon } from '~/icons/counterIcons/BookmarkIcon';
import FriendsIcon from '~/icons/counterIcons/FriendsIcon';
import ReactionIcon from '~/icons/counterIcons/ReactionIcon';

import avatar from '../../assets/images/avatars/avatar_header.svg';
import BurgerButton from '../../components/Buttons/BurgerButton/BurgerButton';
import Logo from '../../components/Logo/Logo';
import { ActionCounterWrapperStyles, headerStyles } from './Header.styles';

export const Header = () => (
    <Flex sx={headerStyles.wrapper} data-test-id='header'>
        <Flex sx={headerStyles.inner}>
            <NavLink to='/'>
                <Logo />
            </NavLink>
            <Show above='lg'>
                <BreadCrumbs />
            </Show>
        </Flex>
        <Spacer />
        <Show above='lg'>
            <AvatarWithName
                name='Екатерина Константинопольская'
                login='@bake_and_pie'
                src={avatar}
            />
        </Show>
        <HStack sx={ActionCounterWrapperStyles} px={{ base: '8px', sm: '12px' }} spacing={0}>
            <ActionCounter icon={BookmarkIcon} countClick={185} spacing='6px' padding='4px 8px' />
            <ActionCounter icon={FriendsIcon} countClick={589} spacing='6px' padding='4px 8px' />
            <ActionCounter icon={ReactionIcon} countClick={587} spacing='6px' padding='4px 8px' />
        </HStack>
        <BurgerButton />
    </Flex>
);
