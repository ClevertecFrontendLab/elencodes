import { Accordion, Box } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { NavMenuFooter } from '~/components/NavMenuFooter/NavMenuFooter';
import { NavMenuItem } from '~/components/NavMenuItem/NavMenuItem';
import { navMenuItemsData } from '~/data/navMenu/navMenuItemsData';

import { NavMenuSideBarBoxStyles } from './NavMenu.style';
import { accordionStyles } from './NavMenu.style';

export const NavMenu = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    return (
        <Flex sx={NavMenuSideBarBoxStyles}>
            <Accordion
                allowToggle
                sx={accordionStyles}
                index={expandedIndex !== null ? [expandedIndex] : undefined}
                onChange={(index) => {
                    setExpandedIndex(typeof index === 'number' ? index : null);
                }}
            >
                {navMenuItemsData.map((el, index) =>
                    el.id === 7 ? (
                        <Box data-test-id='vegan-cuisine' key={el.id}>
                            <NavMenuItem {...el} index={index} expandedIndex={expandedIndex} />
                        </Box>
                    ) : (
                        <NavMenuItem
                            {...el}
                            index={index}
                            expandedIndex={expandedIndex}
                            key={el.id}
                        />
                    ),
                )}
            </Accordion>
            <NavMenuFooter />
        </Flex>
    );
};
