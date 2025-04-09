import { Center, Icon, IconButton, Text } from '@chakra-ui/react';

import { ActionRoundButtonProps } from '~/types/ActionRoundButtonTypes';

import { actionRoundWrapperStyles } from './ActionRoundButton.styles';
import { actionCounterTextStyles } from './ActionRoundButton.styles';
import { actionRoundButtonStyles } from './ActionRoundButton.styles';

export const ActionRoundButton = ({ text, icon, ariaLabel }: ActionRoundButtonProps) => (
    <Center sx={actionRoundWrapperStyles}>
        <IconButton sx={actionRoundButtonStyles} aria-label={ariaLabel} isRound={true}>
            <Icon as={icon} fontSize='24px' />
        </IconButton>
        <Text as='span' sx={actionCounterTextStyles}>
            {text}
        </Text>
    </Center>
);
