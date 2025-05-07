import { Flex } from '@chakra-ui/icons';
import { Link as ChakraLink } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { PATHS } from '~/app/routes/paths.ts';
import { LogoIcon } from '~/icons/logo-icons/logo-icon';
import { LogoNameIcon } from '~/icons/logo-icons/logoname-icon';

export const Logo = () => (
    <ChakraLink as={NavLink} to={PATHS.ROOT}>
        <Flex alignItems='start' gap={{ base: '7px' }}>
            <LogoIcon sx={{ transform: 'translateY(-2px)' }} />
            <LogoNameIcon
                display={{
                    base: 'none',
                    md: 'inline-block',
                }}
            />
        </Flex>
    </ChakraLink>
);
