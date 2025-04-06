import { Flex, Image } from '@chakra-ui/react';
import { ReactElement } from 'react';

import logo from '../../../public/icons/logo.svg';
import logoName from '../../../public/icons/logo_title.svg';

function Logo(): ReactElement {
    return (
        <Flex alignItems='center' width='135px' justifyContent='space-between'>
            <Image src={logo} width='32px' alt='logo' />
            <Image src={logoName} width='96px' alt='logo-name' />
        </Flex>
    );
}

export default Logo;
