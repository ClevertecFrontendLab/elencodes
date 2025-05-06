import { Box, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

import { DATA_TEST_ID } from '~/constants/test-id';
import { Header } from '~/layout/header/header';
import { NavMenu } from '~/layout/navMenu/navMenu';

import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';

export const BurgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        isOpen && (document.body.style.overflow = 'hidden');
        !isOpen && (document.body.style.overflow = 'unset');
    }, [isOpen]);

    return (
        <Box display={{ base: 'block', lg: 'none' }}>
            {isOpen && (
                <Box
                    onClick={onClose}
                    bg='blackAlpha.300'
                    pos='fixed'
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    zIndex={19}
                />
            )}
            {!isOpen && (
                <IconButton
                    data-test-id={DATA_TEST_ID.hamburgerIcon}
                    aria-label='Open menu'
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    display={{ base: 'flex', xl: 'none' }}
                    variant='ghost'
                    size='lg'
                    colorScheme='gray'
                    mr={{ sm: '16px', md: '20px' }}
                />
            )}
            {isOpen && (
                <>
                    <Box w='344px' pos='relative'>
                        <IconButton
                            data-test-id={DATA_TEST_ID.closeIcon}
                            pos='fixed'
                            top='8px'
                            right='16px'
                            aria-label='Close menu'
                            icon={<CloseIcon />}
                            onClick={onClose}
                            variant='ghost'
                            size='lg'
                            zIndex={101}
                        />
                        <Header isBurgerMenu={true} />
                        <NavMenu isBurgerMenu={true} closeBurgerMenu={onClose}>
                            <Box pos='relative' zIndex={101} p='16px 20px 0 20px'>
                                <BreadCrumbs onBreadcrumbItemClick={onClose} />
                            </Box>
                        </NavMenu>
                    </Box>
                </>
            )}
        </Box>
    );
};
