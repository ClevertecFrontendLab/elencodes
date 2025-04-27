import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import { AddAllergen } from '~/icons/AddAllergen';
import { selectFilters } from '~/model/selectors';
import { useAppSelector } from '~/store/hooks';

type Props = {
    options: string[];
    placeholder: string;
    isActive: boolean;
    isAllergenFilter?: boolean;
    allergenFilterType?: 'page' | 'drawer';
    toggleItem?: (item: string) => void;
    addCustomItem?: (item: string) => void;
    selectedItems: string[];
    dataTestId?: string;
};

export const CustomMultiSelect = ({
    options = [],
    placeholder,
    isActive,
    isAllergenFilter = false,
    allergenFilterType,
    toggleItem,
    addCustomItem,
    selectedItems,
    dataTestId,
}: Props) => {
    const filters = useAppSelector(selectFilters);
    const [customValue, setCustomValue] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    let dataTestIdInputValue = 'add-other-allergen';
    if (filters.drawerAllergenFilter.isActive && allergenFilterType === 'page') {
        dataTestIdInputValue = 'none';
    }

    let dataTestIdButtonValue = 'add-allergen-button';
    if (filters.drawerAllergenFilter.isActive && allergenFilterType === 'page') {
        dataTestIdButtonValue = 'none';
    }

    useEffect(() => {
        if (!isActive) {
            setCustomValue('');
        }
    }, [isActive]);

    let dataTestIdMenuButtonValue;
    if (isAllergenFilter) {
        dataTestIdMenuButtonValue =
            allergenFilterType === 'page'
                ? 'allergens-menu-button'
                : 'allergens-menu-button-filter';
    } else if (dataTestId) {
        dataTestIdMenuButtonValue = dataTestId;
    } else {
        dataTestIdMenuButtonValue = 'none';
    }

    const addCustomItemHandler = () => {
        if (customValue.trim()) {
            addCustomItem?.(customValue);
            setCustomValue('');
        }
    };
    const addCustomItemOnEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && customValue.trim()) {
            addCustomItem?.(customValue);
            setCustomValue('');
        }
    };

    const inputRef = useRef<HTMLInputElement>(null);

    const returnFocusToInput = () => {
        setTimeout(() => {
            inputRef.current?.focus();
            if (window.Cypress) {
                document
                    .querySelector<HTMLInputElement>(`[data-test-id="${dataTestIdInputValue}"]`)
                    ?.focus();
            }
        }, 50);
    };

    return (
        <Menu
            isOpen={isMenuOpen}
            onOpen={() => isActive && setIsMenuOpen(true)}
            onClose={() => setIsMenuOpen(false)}
            computePositionOnMount
            strategy='fixed'
            modifiers={[
                {
                    name: 'sameWidth',
                    enabled: true,
                    fn: ({ state }) => {
                        state.styles.popper.width = `${state.rects.reference.width}px`;
                    },
                    phase: 'beforeWrite',
                    requires: ['computeStyles'],
                },
                {
                    name: 'preventOverflow',
                    options: {
                        padding: 8,
                    },
                },
            ]}
        >
            <MenuButton
                data-test-id={dataTestIdMenuButtonValue}
                cursor={isActive ? 'pointer' : 'not-allowed'}
                as={Button}
                rightIcon={isMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                w='100%'
                h='auto'
                p='10px 16px'
                textAlign='left'
                justifyContent='space-between'
                fontWeight='normal'
                bg='white'
                border='1px solid'
                borderColor={isActive ? 'blackAlpha.600' : 'gray.200'}
                _active={{
                    bg: 'inherit',
                }}
                _hover={{ borderColor: 'gray.300' }}
                _expanded={{
                    borderColor: 'lime.300',
                    bg: 'white',
                }}
                pointerEvents={!isActive ? 'none' : 'auto'}
                isDisabled={!isActive}
            >
                {selectedItems.length > 0 ? (
                    <Flex flexWrap='wrap' gap={2}>
                        {selectedItems.map((item) => (
                            <Box
                                key={item}
                                p='0 8px'
                                borderRadius='6px'
                                h='20px'
                                border='1px solid'
                                borderColor='lime.400'
                                fontSize='xs'
                                color='lime.600'
                                lineHeight='20px'
                            >
                                {item}
                            </Box>
                        ))}
                    </Flex>
                ) : (
                    <Box as='span' color='gray.500'>
                        {placeholder}
                    </Box>
                )}
            </MenuButton>

            <MenuList
                data-test-id={allergenFilterType === 'page' ? 'allergens-menu' : 'none'}
                zIndex={9}
                p={0}
                transformOrigin='top center'
                boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
            >
                <Stack spacing={0}>
                    {options.map((option, index) => {
                        const isVegan = option === 'Веганская кухня';
                        let dataTestValue;

                        if (isAllergenFilter) {
                            dataTestValue = `allergen-${index}`;
                        } else if (isVegan) {
                            dataTestValue = 'checkbox-веганская кухня';
                        } else {
                            dataTestValue = 'none';
                        }
                        return (
                            <MenuItem
                                key={option}
                                closeOnSelect={false}
                                bg={index % 2 === 0 ? 'blackAlpha.100' : 'white'}
                            >
                                <Checkbox
                                    data-test-id={dataTestValue}
                                    isChecked={selectedItems.includes(option)}
                                    onChange={() => {
                                        toggleItem?.(option);
                                        returnFocusToInput();
                                    }}
                                    mr={2}
                                >
                                    {option}
                                </Checkbox>
                            </MenuItem>
                        );
                    })}

                    {isAllergenFilter && (
                        <Flex alignItems='center' p={2} pl={6} w='100%' gap={2}>
                            <Input
                                ref={inputRef}
                                autoFocus={isMenuOpen && isAllergenFilter}
                                data-test-id={dataTestIdInputValue}
                                value={customValue}
                                onChange={(e) => setCustomValue(e.currentTarget.value)}
                                placeholder='Другой аллерген'
                                size='sm'
                                borderRadius='4px'
                                borderColor='blackAlpha.200'
                                onKeyDown={addCustomItemOnEnterHandler}
                                flexGrow={1}
                            />
                            <AddAllergen
                                data-test-id={dataTestIdButtonValue}
                                onClick={addCustomItemHandler}
                                cursor='pointer'
                            />
                        </Flex>
                    )}
                </Stack>
            </MenuList>
        </Menu>
    );
};
