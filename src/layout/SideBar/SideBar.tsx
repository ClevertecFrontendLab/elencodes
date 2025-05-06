import { Center, IconButton, Spacer, Text, VStack } from '@chakra-ui/react';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { BookmarkIcon } from '~/icons/counterIcons/bookmarkIcon';
import FriendsIcon from '~/icons/counterIcons/friendsIcon';
import ReactionIcon from '~/icons/counterIcons/reactionIcon';
import AddRecipeIcon from '~/icons/sidebarIcons/addRecipeIcon';

import { actionRoundWrapperStyles } from './sideBar.styles';
import { actionRoundButtonStyles } from './sideBar.styles';
import { actionRoundButtonTextStyles } from './sideBar.styles';
import { SideBarActionCounterWrapperStyles } from './sideBar.styles';
import { SideBarWrapperStyles } from './sideBar.styles';

export const SideBar = () => (
    <VStack sx={SideBarWrapperStyles}>
        <VStack sx={SideBarActionCounterWrapperStyles}>
            <ActionCounter
                icon={BookmarkIcon}
                countClick={185}
                spacing='8px'
                padding='8px 16px'
                fontSize='16'
            />
            <ActionCounter
                icon={FriendsIcon}
                countClick={589}
                spacing='8px'
                padding='8px 16px'
                fontSize='16'
            />
            <ActionCounter
                icon={ReactionIcon}
                countClick={587}
                spacing='8px'
                padding='8px 16px'
                fontSize='16'
            />
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
