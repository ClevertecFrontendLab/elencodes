import { Icon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/react';

import { ActionCounterPropsType } from '~/types/ActionCounterType';

import { actionCounterTextStyles } from './ActionCounter.style';

export const ActionCounter = ({ countClick, icon, spacing, padding }: ActionCounterPropsType) => (
    <HStack spacing={spacing} p={padding}>
        <Icon as={icon} />
        <Text as='span' sx={actionCounterTextStyles}>
            {countClick}
        </Text>
    </HStack>
);
