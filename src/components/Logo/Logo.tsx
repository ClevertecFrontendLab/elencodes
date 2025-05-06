import { Flex } from '@chakra-ui/react';

import LogoIcon from '../../icons/LogoIcons/LogoIcon';
import LogoNameIcon from '../../icons/LogoIcons/LogoNameIcon';
import logoStyles from './Logo.styles';

export const Logo = () => (
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
