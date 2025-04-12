import { Box } from '@chakra-ui/icons';
import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

import { AvatarWithNamePropsType } from '~/types/AvatarWithNameType';

import {
    avatarBoxWrapperStyles,
    avatarStyles,
    headingStyles,
    textStyles,
} from './AvatarWithName.styles';

export const AvatarWithName = ({ src, name, login }: AvatarWithNamePropsType) => (
    <Flex sx={avatarBoxWrapperStyles}>
        <Avatar name={name} src={src} sx={avatarStyles} />
        <Box>
            <Heading as='h6' noOfLines={1} wordBreak='break-all' sx={headingStyles}>
                {name}
            </Heading>
            <Text as='span' sx={textStyles}>
                {login}
            </Text>
        </Box>
    </Flex>
);
