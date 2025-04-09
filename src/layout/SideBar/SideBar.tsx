import { Spacer, VStack } from '@chakra-ui/react';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { ActionRoundButton } from '~/components/Buttons/ActionRoundButton/ActionRoundButton';
import BookmarkIcon from '~/icons/CounterIcons/BookmarkIcon';
import FriendsIcon from '~/icons/CounterIcons/FriendsIcon';
import ReactionIcon from '~/icons/CounterIcons/ReactionIcon';
import AddRecipeIcon from '~/icons/SidebarIcons/AddRecipeIcon';

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
        <ActionRoundButton
            text='Записать рецепт'
            icon={AddRecipeIcon}
            ariaLabel='Записать рецепт'
        />
    </VStack>
);
