import { AccordionPanel, Box, Icon, ListItem, UnorderedList } from '@chakra-ui/icons';
import { AccordionButton, AccordionItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { DATA_TEST_ID } from '~/constants/test-id';
import { iconsMap } from '~/icons/iconsMapping';
import NavMenuArrowCloseIcon from '~/icons/navMenuIcons/navMenuArrowCloseIcon';
import NavMenuArrowOpenIcon from '~/icons/navMenuIcons/navMenuArrowOpenIcon';
import { resetFilters } from '~/model/filterSlice';
import { useAppDispatch } from '~/store/hooks';
import { SubcategoryType } from '~/types/recipeType';

// import { accordionButtonStyles } from './NavMenuItem.styles';

type NavMenuItemPropsType = {
    id: string;
    icon: string;
    name: string;
    nameEn: string;
    subcategories: SubcategoryType[];
    closeBurgerMenu?: () => void;
};

export const NavMenuItem = ({
    icon,
    name,
    nameEn,
    subcategories,
    closeBurgerMenu,
}: NavMenuItemPropsType) => {
    const dispatch = useAppDispatch();

    const onCategoryClickHandler = () => {
        setSelected(0);
        dispatch(resetFilters());
    };
    const [selected, setSelected] = useState<null | number>(null);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setSelected(null);
        }
        const pathNames = location.pathname.split('/').filter(Boolean);
        const activeIndex = subcategories.findIndex(
            (sub) => sub.id === pathNames[pathNames.length - 1],
        );
        if (activeIndex !== -1) {
            setSelected(activeIndex);
        }
    }, [location.pathname, subcategories]);

    const markerStyles = {
        content: '""',
        position: 'absolute',
        left: '40px',
        h: '24px',
        w: '1px',
        bg: 'lime.300',
    };

    const onClickItemHandle = (index: number) => {
        setSelected(index);
        if (closeBurgerMenu) closeBurgerMenu();
    };

    const IconComponent = iconsMap[icon];

    return (
        <>
            <AccordionItem border='none'>
                {({ isExpanded }) => (
                    <>
                        <h3>
                            <AccordionButton
                                data-test-id={
                                    nameEn === 'vegan' ? DATA_TEST_ID.veganCuisine : `${nameEn}`
                                }
                                onClick={onCategoryClickHandler}
                                as={Link}
                                to={`/${nameEn}/${subcategories[0].nameEn}`}
                                fontWeight='500'
                                fontSize='16px'
                                _expanded={{ bg: 'lime.100', fontWeight: '700' }}
                                _hover={{
                                    bg: 'lime.50',
                                }}
                                p='12px 8px'
                            >
                                <Icon as={IconComponent} boxSize='24px' />
                                <Box flex='1' textAlign='left' ml='12px'>
                                    {name}
                                </Box>
                                {isExpanded ? (
                                    <Icon as={NavMenuArrowOpenIcon} />
                                ) : (
                                    <Icon as={NavMenuArrowCloseIcon} />
                                )}
                            </AccordionButton>
                        </h3>
                        <AccordionPanel p={0}>
                            <UnorderedList ml={0}>
                                {subcategories.map((item, index) => (
                                    <ListItem
                                        data-test-id={
                                            selected === index ? `${item.nameEn}-active` : 'none'
                                        }
                                        as={Link}
                                        display='block'
                                        to={`/${nameEn}/${subcategories[index].nameEn}`}
                                        key={index}
                                        p='6px 8px 6px 52px'
                                        listStyleType='none'
                                        position='relative'
                                        _before={markerStyles}
                                        cursor='pointer'
                                        onClick={() => onClickItemHandle(index)}
                                        _selected={{
                                            _before: {
                                                w: '8px',
                                                left: '33px',
                                            },
                                        }}
                                        _hover={{
                                            bg: 'lime.50',
                                            _before: {
                                                w: '0',
                                            },
                                        }}
                                        {...(selected === index && { 'data-selected': true })}
                                    >
                                        {item.name}
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
