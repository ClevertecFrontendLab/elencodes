import { Flex, SearchIcon } from '@chakra-ui/icons';
import { Box, Image } from '@chakra-ui/react';
import avatar from '@public/images/avatars/avatar_header.svg';
import { useNavigate } from 'react-router';

import { PATHS } from '~/app/routes/paths.ts';
import { NavCircleButton } from '~/components/ui';
import { AddRecipeFooterIcon } from '~/icons/footer-icons/add-recipe-footer-icon';
import { HomeIcon } from '~/icons/footer-icons/home-icon';

export const Footer = () => {
    const navigate = useNavigate();

    const handleGoHomeButtonClick = () => {
        navigate(PATHS.ROOT);
    };

    const handleWriteRecipeButtonClick = () => {
        navigate(PATHS.NEW_RECIPE);
    };

    return (
        <Box as='footer' bg='lime.50' height='84px'>
            <Flex align='center' h='100%' justify='space-around'>
                <NavCircleButton
                    icon={<HomeIcon />}
                    label='Главная'
                    onClick={handleGoHomeButtonClick}
                    isPrimary
                />
                <NavCircleButton icon={<SearchIcon />} label='Поиск' />
                <NavCircleButton
                    icon={<AddRecipeFooterIcon color='black' />}
                    label='Записать'
                    onClick={handleWriteRecipeButtonClick}
                />
                <NavCircleButton
                    icon={<Image src={avatar} boxSize='40px' borderRadius='full' />}
                    label='Мой профиль'
                />
            </Flex>
        </Box>
    );
};
