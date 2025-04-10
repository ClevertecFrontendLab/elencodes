import { Center, IconButton, Spacer, Text, VStack } from '@chakra-ui/react';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import BookmarkIcon from '~/icons/CounterIcons/BookmarkIcon';
import FriendsIcon from '~/icons/CounterIcons/FriendsIcon';
import ReactionIcon from '~/icons/CounterIcons/ReactionIcon';
import AddRecipeIcon from '~/icons/SidebarIcons/AddRecipeIcon.tsx';

import { actionRoundWrapperStyles } from './SideBar.styles';
import { actionRoundButtonStyles } from './SideBar.styles';
import { actionRoundButtonTextStyles } from './SideBar.styles';
import { SideBarActionCounterWrapperStyles } from './SideBar.styles';
import { SideBarWrapperStyles } from './SideBar.styles';

export const SideBar = () => (
    <VStack sx={SideBarWrapperStyles}>
        <VStack sx={SideBarActionCounterWrapperStyles}>
            <ActionCounter icon={BookmarkIcon} countClick={185} spacing='8px' padding='8px 16px' />
            <ActionCounter icon={FriendsIcon} countClick={589} spacing='8px' padding='8px 16px' />
            <ActionCounter icon={ReactionIcon} countClick={587} spacing='8px' padding='8px 16px' />
        </VStack>
        <Spacer />
        <Center sx={actionRoundWrapperStyles}>
            <IconButton
                sx={actionRoundButtonStyles}
                aria-label='Записать рецепт'
                isRound={true}
                icon={<AddRecipeIcon />}
            ></IconButton>
            <Text as='span' sx={actionRoundButtonTextStyles}>
                Записать рецепт
            </Text>
        </Center>
    </VStack>
);
