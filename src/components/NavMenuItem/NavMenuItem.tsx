import { AccordionPanel, Box, Icon, ListItem, UnorderedList } from '@chakra-ui/icons';
import { AccordionButton, AccordionItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import NavMenuArrowCloseIcon from '~/icons/NavMenuIcons/NavMenuArrowCloseIcon';
import NavMenuArrowOpenIcon from '~/icons/NavMenuIcons/NavMenuArrowOpenIcon';
import { NavMenuItemPropsType } from '~/types/NavMenuItemType';

import { accordionButtonStyles } from './NavMenuItem.styles';
import { accordionButtonTextStyles } from './NavMenuItem.styles';
import { accordionListItemStyles } from './NavMenuItem.styles';

export const NavMenuItem = ({
    icon,
    title,
    listItems,
    linkTo = '/',
    index,
    expandedIndex,
}: NavMenuItemPropsType) => {
    const [selected, setSelected] = useState<null | number>(null);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setSelected(null);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (expandedIndex === index) {
            setSelected(0);
        }
    }, [expandedIndex, index]);

    return (
        <>
            <AccordionItem border='none'>
                {({ isExpanded }) => (
                    <>
                        <h3 onClick={() => setSelected(null)}>
                            <AccordionButton as={Link} to={linkTo} sx={accordionButtonStyles}>
                                <Icon as={icon} boxSize='24px' />
                                <Box sx={accordionButtonTextStyles}>{title}</Box>
                                {isExpanded ? (
                                    <Icon as={NavMenuArrowOpenIcon} />
                                ) : (
                                    <Icon as={NavMenuArrowCloseIcon} />
                                )}
                            </AccordionButton>
                        </h3>
                        <AccordionPanel p={0}>
                            <UnorderedList ml={0}>
                                {listItems.map((item, itemIndex) => (
                                    <ListItem
                                        key={itemIndex}
                                        onClick={() => setSelected(itemIndex)}
                                        {...(selected === itemIndex && { 'data-selected': true })}
                                        sx={accordionListItemStyles}
                                    >
                                        {item}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </>
    );
};
