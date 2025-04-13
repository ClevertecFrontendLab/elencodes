import { Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

import LogoIcon from '../../icons/LogoIcons/LogoIcon';
import LogoNameIcon from '../../icons/LogoIcons/LogoNameIcon';
import logoStyles from './Logo.styles';

function Logo(): ReactElement {
    return (
        <Flex sx={logoStyles}>
            <LogoIcon sx={{ transform: 'translateY(-2px)' }} />
            <LogoNameIcon
                display={{
                    base: 'none',
                    md: 'inline-block',
                }}
            />
        </Flex>
    );
}

export default Logo;
