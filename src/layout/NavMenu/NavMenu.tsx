import { Accordion, Box } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

import { NavMenuFooter } from '~/components/NavMenuFooter/NavMenuFooter';
import { NavMenuItem } from '~/components/NavMenuItem/NavMenuItem';
import { navMenuItemsData } from '~/data/navMenu/navMenuItemsData';

import { NavMenuSideBarBoxStyles } from './NavMenu.style';
import { accordionStyles } from './NavMenu.style';

export const NavMenu = () => (
    <Flex sx={NavMenuSideBarBoxStyles}>
        <Accordion allowToggle sx={accordionStyles}>
            {navMenuItemsData.map((el) =>
                el.id === 7 ? (
                    <Box data-test-id='vegan-cuisine' key={el.id}>
                        <NavMenuItem {...el} />
                    </Box>
                ) : (
                    <NavMenuItem {...el} key={el.id} />
                ),
            )}
        </Accordion>
        <NavMenuFooter />
    </Flex>
);
