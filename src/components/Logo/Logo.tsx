import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import LogoIcon from '../CustomIcons/LogoIcon';
import LogoTitle from '../CustomIcons/LogoTitle';
import logoStyles from './Logo.styles';

function Logo(): ReactElement {
    return (
        <Flex sx={logoStyles}>
            <LogoIcon sx={{ transform: 'translateY(-2px)' }} />
            <LogoTitle
                display={{
                    base: 'none',
                    sm: 'inline-block',
                }}
            />
        </Flex>
    );
}

export default Logo;
