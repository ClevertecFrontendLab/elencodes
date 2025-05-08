import { VStack } from '@chakra-ui/icons';
import { Avatar, HStack, Text } from '@chakra-ui/react';

import userAvatar from '../../../assets/images/avatars/avatar_header.svg';

export const UserInfo = () => (
    <HStack spacing={2} align='center' mr='40px'>
        <Avatar
            name='Екатерина Константинопольская'
            size={{ base: 'sm', sm: 'md' }}
            src={userAvatar}
        />
        <VStack align='start' spacing={0}>
            <Text
                fontSize={{ base: 'sm', sm: 'lg' }}
                fontWeight={500}
                lineHeight={{ base: 6, sm: 7 }}
                letterSpacing='-0.5px'
            >
                Екатерина Константинопольская
            </Text>
            <Text fontSize={{ base: 'xs', sm: 'sm' }} color='blackAlpha.700' maxWidth='296px'>
                @bake_and_pie
            </Text>
        </VStack>
    </HStack>
);
