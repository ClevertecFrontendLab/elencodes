import { Icon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/react';

import { ActionCounterProps } from '~/types/ActionCounterTypes';

import { actionCounterTextStyles } from './ActionCounter.style';

export const ActionCounter = ({ countClick, icon, spacing, padding }: ActionCounterProps) => (
    <HStack spacing={spacing} p={padding}>
        <Icon as={icon} />
        <Text as='span' sx={actionCounterTextStyles}>
            {countClick}
        </Text>
    </HStack>
);
