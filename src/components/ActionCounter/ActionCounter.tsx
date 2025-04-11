import { Icon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/react';

import { ActionCounterPropsType } from '~/types/ActionCounterType';

import { actionCounterTextStyles } from './ActionCounter.style';

export const ActionCounter = ({
    countClick,
    icon,
    spacing,
    padding,
    fontSize = 'xs',
}: ActionCounterPropsType) => (
    <HStack spacing={spacing} p={padding}>
        <Icon as={icon} />
        <Text as='span' fontSize={fontSize} sx={actionCounterTextStyles}>
            {countClick}
        </Text>
    </HStack>
);
