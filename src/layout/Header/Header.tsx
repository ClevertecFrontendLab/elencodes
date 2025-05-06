import { Box, Flex, HStack, Show, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { AvatarWithName } from '~/components/AvatarWithName/AvatarWithName';
import { BreadCrumbs } from '~/components/BreadCrumbs/BreadCrumbs';
import { BurgerMenu } from '~/components/BurgerMenu/BurgerMenu';
import { Logo } from '~/components/Logo/Logo';
import { DATA_TEST_ID } from '~/constants/test-id';
import { BookmarkIcon } from '~/icons/counterIcons/BookmarkIcon';
import FriendsIcon from '~/icons/counterIcons/FriendsIcon';
import ReactionIcon from '~/icons/counterIcons/ReactionIcon';
import { resetFilters } from '~/model/filterSlice';
import { useAppDispatch } from '~/store/hooks';

import avatar from '../../assets/images/avatars/avatar_header.svg';
import { ActionCounterWrapperStyles } from './Header.styles';

type HeaderPropsType = {
    isBurgerMenu?: boolean;
};

export const Header = ({ isBurgerMenu = false }: HeaderPropsType) => {
    const dispatch = useAppDispatch();

    const resetFiltersHandler = () => {
        dispatch(resetFilters());
    };

    return (
        <Flex
            pl='12px'
            as='header'
            h={{ base: '64px', xl: '80px' }}
            bg={isBurgerMenu ? 'white' : 'lime.50'}
            align='center'
            pos='fixed'
            top='0'
            right='0'
            left='0'
            data-test-id={DATA_TEST_ID.header}
            zIndex={isBurgerMenu ? 100 : 10}
        >
            <NavLink to='/' onClick={resetFiltersHandler}>
                <Logo />
            </NavLink>
            {!isBurgerMenu && (
                <>
                    <Show above='lg'>
                        <BreadCrumbs />
                    </Show>
                    <Spacer />
                    <Show above='lg'>
                        <Box mr='80px'>
                            <AvatarWithName
                                name='Екатерина Константинопольская'
                                login='@bake_and_pie'
                                src={avatar}
                            />
                        </Box>
                    </Show>
                    <HStack
                        px={{ base: '8px', sm: '12px' }}
                        spacing={0}
                        sx={ActionCounterWrapperStyles}
                    >
                        <ActionCounter
                            icon={BookmarkIcon}
                            countClick={185}
                            spacing='6px'
                            padding='4px 8px'
                            boxSize='12px'
                        />
                        <ActionCounter
                            icon={FriendsIcon}
                            countClick={589}
                            spacing='6px'
                            padding='4px 8px'
                            boxSize='12px'
                        />
                        <ActionCounter
                            icon={ReactionIcon}
                            countClick={587}
                            spacing='6px'
                            padding='4px 8px'
                            boxSize='12px'
                        />
                    </HStack>
                    <BurgerMenu />
                </>
            )}
        </Flex>
    );
};
