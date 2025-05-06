import { Box } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';

import { CulinaryBlogItemPropsType } from '~/types/culinaryBlogType';

import { AvatarWithName } from '../AvatarWithName/AvatarWithName';
import { culinaryBlogItemBoxStyles, culinaryBlogItemTextStyles } from './CulinaryBlogItem.styles';

export const CulinaryBlogItem = ({ avatar, name, login, text }: CulinaryBlogItemPropsType) => (
    <Box sx={culinaryBlogItemBoxStyles}>
        <AvatarWithName src={avatar} name={name} login={login} />
        <Text noOfLines={3} sx={culinaryBlogItemTextStyles}>
            {text}
        </Text>
    </Box>
);
