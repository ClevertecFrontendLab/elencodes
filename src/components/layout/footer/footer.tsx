import { Flex, SearchIcon } from '@chakra-ui/icons';
import { Box, Image } from '@chakra-ui/react';
import avatar from '@public/images/avatars/avatar_header.svg';

import { NavCircleButton } from '~/components/ui';
import { AddRecipeFooterIcon } from '~/icons/footer-icons/add-recipe-footer-icon';
import { HomeIcon } from '~/icons/footer-icons/home-icon';

export const Footer = () => (
    <Box as='footer' bg='lime.50' height='84px'>
        <Flex align='center' h='100%' justify='space-around'>
            <NavCircleButton icon={<HomeIcon />} label='Главная' isPrimary />
            <NavCircleButton icon={<SearchIcon />} label='Поиск' />
            <NavCircleButton icon={<AddRecipeFooterIcon color='black' />} label='Записать' />
            <NavCircleButton
                icon={<Image src={avatar} boxSize='40px' borderRadius='full' />}
                label='Мой профиль'
            />
        </Flex>
    </Box>
);
