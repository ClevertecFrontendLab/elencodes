import { Flex, Icon, Text } from '@chakra-ui/react';

import { iconsMap } from '~/icons/iconsMapping';
import { selectCategories } from '~/model/selectors';
import { useAppSelector } from '~/store/hooks';
import { MenuItemTagType } from '~/types/MenuItemTagType';

import {
    menuItemTagBoxStyles,
    menuItemTagIconStyles,
    menuItemTagTextStyles,
} from './MenuItemTag.styles';

export const MenuItemTag = ({ category, bgColor }: MenuItemTagType) => {
    const categories = useAppSelector(selectCategories);
    const currentCategory = categories.find((item) => item.id === category);

    if (!currentCategory) {
        return;
    }

    const IconComponent = iconsMap[currentCategory.icon];

    return (
        <Flex bg={bgColor} sx={menuItemTagBoxStyles}>
            <Icon as={IconComponent} sx={menuItemTagIconStyles} />
            <Text as='span' noOfLines={1} sx={menuItemTagTextStyles}>
                {currentCategory.name}
            </Text>
        </Flex>
    );
};
