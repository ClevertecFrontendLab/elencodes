import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import LogoIcon from '../CustomIcons/LogoIcon';
import LogoNameIcon from '../CustomIcons/LogoNameIcon';
import logoStyles from './Logo.styles';

function Logo(): ReactElement {
    return (
        <Flex sx={logoStyles}>
            <LogoIcon sx={{ transform: 'translateY(-2px)' }} />
            <LogoNameIcon
                display={{
                    base: 'none',
                    sm: 'inline-block',
                }}
            />
        </Flex>
    );
}

export default Logo;
