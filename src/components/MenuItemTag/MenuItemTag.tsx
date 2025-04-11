import { Flex, Icon, Text } from '@chakra-ui/react';

import { MenuItemTagType } from '~/types/MenuItemTagType';

import {
    menuItemTagBoxStyles,
    menuItemTagIconStyles,
    menuItemTagTextStyles,
} from './MenuItemTag.styles';

export const MenuItemTag = ({ icon, title, bgColor, mobilePos = 'absolute' }: MenuItemTagType) => (
    <Flex bg={bgColor} pos={{ base: mobilePos, xl: 'static' }} sx={menuItemTagBoxStyles}>
        <Icon as={icon} sx={menuItemTagIconStyles} />
        <Text as='span' noOfLines={1} sx={menuItemTagTextStyles}>
            {title}
        </Text>
    </Flex>
);
