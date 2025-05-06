import { Box } from '@chakra-ui/icons';
import { Flex, Text, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

import {
    footerIconsBoxStyles,
    footerInnerWrapperStyles,
    footerTextStyles,
    footerWrapperStyles,
} from './FooterItem.styles';

type FooterItemPropsType = {
    children: ReactNode;
    text: string;
    isActive: boolean;
};

export const FooterItem = ({ children, text, isActive }: FooterItemPropsType) => {
    const textColor = isActive ? 'black' : 'blackAlpha.700';
    const bgColor = isActive
        ? 'radial-gradient(circle at 50% 40%, rgba(196, 255, 97, 0.7),rgba(255, 255, 255, 0) 55%),rgb(255, 255, 211)'
        : 'lime.50';

    return (
        <Box bg={bgColor} sx={footerWrapperStyles}>
            <VStack spacing={0} sx={footerInnerWrapperStyles}>
                <Flex sx={footerIconsBoxStyles}>{children}</Flex>
                <Text color={textColor} fontWeight={isActive ? 500 : 400} sx={footerTextStyles}>
                    {text}
                </Text>
            </VStack>
        </Box>
    );
};
