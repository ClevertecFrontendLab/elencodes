import { Icon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/react';

import { ActionCounterPropsType } from '~/types/ActionCounterType';

import { actionCounterTextStyles } from './ActionCounter.styles';

export const ActionCounter = ({
    countClick,
    icon,
    spacing,
    padding,
    fontSize = 'xs',
    boxSize,
}: ActionCounterPropsType) => (
    <HStack spacing={spacing} p={padding}>
        <Icon as={icon} boxSize={boxSize} />
        <Text as='span' fontSize={fontSize} sx={actionCounterTextStyles}>
            {countClick}
        </Text>
    </HStack>
);
