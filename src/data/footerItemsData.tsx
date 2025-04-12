import { Icon } from '@chakra-ui/icons';
import { Avatar, IconButton } from '@chakra-ui/react';

import AddRecipeFooterIcon from '~/icons/FooterIcons/AddRecipeFooterIcon';
import HomeIcon from '~/icons/FooterIcons/HomeIcon';
import SearchIcon from '~/icons/SearchIcon';
import { FooterItemDataType } from '~/types/FooterItemDataType';

import avatar from '../assets/images/avatars/avatar_header.svg';

export const footerItems: FooterItemDataType[] = [
    {
        id: 1,
        text: 'Главная',
        isActive: true,
        icon: (
            <IconButton
                isRound={true}
                variant='solid'
                bg='black'
                _hover={{ bg: 'black' }}
                aria-label='Главная'
                fontSize='20px'
                icon={<HomeIcon boxSize='16px' />}
            />
        ),
    },
    {
        id: 2,
        text: 'Поиск',
        isActive: false,
        icon: <Icon as={SearchIcon} boxSize='24px' />,
    },
    {
        id: 3,
        text: 'Записать',
        isActive: false,
        icon: <Icon as={AddRecipeFooterIcon} boxSize='24px' />,
    },
    {
        id: 4,
        text: 'Мой профиль',
        isActive: false,
        icon: <Avatar name='Екатерина Константинопольская' src={avatar} boxSize='40px' />,
    },
];
