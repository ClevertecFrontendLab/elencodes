import { Box, Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

import LogOutIcon from '~/icons/FooterNavMenuIcons/LogOutIcon';

import { NavMenuFooterBoxStyles } from './NavMenuFooter.styles';
import { NavMenuFooterTextVersionStyles } from './NavMenuFooter.styles';
import { NavMenuFooterTextStyles } from './NavMenuFooter.styles';
import { LogOutBoxStyles } from './NavMenuFooter.styles';
import { LogOutTextStyles } from './NavMenuFooter.styles';

export const NavMenuFooter = () => (
    <Box as='footer' sx={NavMenuFooterBoxStyles}>
        <Box as='span' sx={NavMenuFooterTextVersionStyles}>
            Версия программы 03.25
        </Box>
        <Box as='span' sx={NavMenuFooterTextStyles}>
            Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
        </Box>
        <Flex as='a' sx={LogOutBoxStyles}>
            <Icon as={LogOutIcon} />
            <Box as='span' sx={LogOutTextStyles}>
                Выйти
            </Box>
        </Flex>
    </Box>
);
