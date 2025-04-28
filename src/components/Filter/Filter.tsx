import { TagCloseButton, TagLabel } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Tag,
    VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { meatTypes } from '~/data/filter/meatTypes.ts';
import { sideDishTypes } from '~/data/filter/sideDishTypes.ts';
import { CloseFilterIcon } from '~/icons/CloseFilterIcon';
import {
    removeAllergen,
    removeAuthor,
    removeCategory,
    removeMeatType,
    removeSideType,
    resetFilters,
    toggleAuthors,
    toggleCategories,
    toggleMeatType,
    toggleSearchModeOnPage,
    toggleSideType,
} from '~/model/filterSlice.ts';
import { selectCategories, selectFilters } from '~/model/selectors.ts';
import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';
import { MeatTypeItem, SideDishTypes } from '~/types/recipeType';

import { AllergensFilter } from '../AllergensFilter/AllergensFilter';
import { CustomMultiSelect } from '../CustomMultiSelect/CustomMultiSelect';

type Props = {
    open: boolean;
    handleClose: () => void;
};

export const Filter = ({ open, handleClose }: Props) => {
    const filters = useAppSelector(selectFilters);
    const categories = useAppSelector(selectCategories);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [key, setKey] = useState(0);

    useEffect(() => {
        if (!open) {
            setKey((prev) => prev + 1);
        }
    }, [open]);

    const setCategories = (category: string) => {
        dispatch(toggleCategories(category));
    };

    const setAuthors = (author: string) => {
        dispatch(toggleAuthors(author));
    };

    const setMeatType = (meat: MeatTypeItem) => {
        dispatch(toggleMeatType(meat));
    };

    const setSideType = (side: SideDishTypes) => {
        dispatch(toggleSideType(side));
    };

    const searchRecipesHandler = () => {
        handleClose();
        navigate('/');
        dispatch(toggleSearchModeOnPage(true));
    };

    const removeTag = (tag: string) => {
        if (filters.selectedCategories.includes(tag)) {
            dispatch(removeCategory(tag));
        } else if (filters.selectedAuthors.includes(tag)) {
            dispatch(removeAuthor(tag));
        } else if (filters.selectedMeatType.some((m) => m.label === tag)) {
            const meatToRemove = meatTypes.find((m) => m.label === tag);
            if (meatToRemove) {
                dispatch(removeMeatType(meatToRemove.value));
            }
        } else if (filters.selectedSideType.some((s) => s.label === tag)) {
            const sideToRemove = sideDishTypes.find((s) => s.label === tag);
            if (sideToRemove) {
                dispatch(removeSideType(sideToRemove.value));
            }
        } else if (filters.drawerAllergenFilter.excludedAllergens.includes(tag)) {
            dispatch(removeAllergen(tag));
        }
    };

    const categoriesNameArr = categories.map((c) => c.name);

    const allSelectedFilters = [
        ...filters.selectedCategories,
        ...filters.selectedAuthors,
        ...filters.selectedMeatType.map((m) => m.label),
        ...filters.selectedSideType.map((s) => s.label),
        ...filters.drawerAllergenFilter.excludedAllergens,
    ];

    const isSearchDisabled = !allSelectedFilters.length;

    return (
        <Drawer key={key} isOpen={open} placement='right' onClose={handleClose} size='full'>
            <DrawerOverlay />
            <DrawerContent
                data-test-id='filter-drawer'
                maxW={{ base: '344px', lg: '463px' }}
                w={{ base: '344px', lg: '463px' }}
            >
                <Box
                    p={{ base: '16px 20px 16px 16px', xl: '32px' }}
                    borderBottom='1px solid'
                    borderColor='gray.200'
                    flexShrink={0}
                >
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Heading fontSize='2xl' fontWeight={700}>
                            Фильтр
                        </Heading>
                        <CloseFilterIcon
                            data-test-id='close-filter-drawer'
                            boxSize='24px'
                            cursor='pointer'
                            onClick={handleClose}
                        />
                    </Flex>
                </Box>

                <DrawerBody
                    p={{ base: '16px 26px 16px 16px', xl: '32px 42px 32px 32px' }}
                    display='flex'
                    flexDirection='column'
                    overflowY='auto'
                    position='relative'
                    sx={{
                        '&::-webkit-scrollbar': {
                            width: '16px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#00000028',
                            borderRadius: '8px',
                            border: '5px solid transparent',
                            backgroundClip: 'content-box',
                            width: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: '#0000000A',
                            border: '5px solid transparent',
                            backgroundClip: 'content-box',
                            width: '6px',
                        },
                        '&::-webkit-scrollbar-button': {
                            display: 'none',
                        },
                    }}
                >
                    <Flex direction='column' gap={{ base: 4, xl: 6 }} flex='1'>
                        <CustomMultiSelect
                            dataTestId='filter-menu-button-категория'
                            options={categoriesNameArr}
                            placeholder='Категория'
                            isActive={true}
                            selectedItems={filters.selectedCategories}
                            toggleItem={setCategories}
                        />

                        <CustomMultiSelect
                            options={['автор1', 'автор2']}
                            placeholder='Поиск по автору'
                            isActive={true}
                            selectedItems={filters.selectedAuthors}
                            toggleItem={setAuthors}
                        />

                        <FormControl>
                            <FormLabel>Тип мяса:</FormLabel>
                            <CheckboxGroup
                                colorScheme='gray'
                                value={filters.selectedMeatType.map((m) => m.value)}
                            >
                                <VStack
                                    align='start'
                                    sx={{ '& .chakra-checkbox__label': { fontSize: '14px' } }}
                                >
                                    {meatTypes.map((meat) => (
                                        <Checkbox
                                            key={meat.value}
                                            value={meat.value}
                                            isChecked={filters.selectedMeatType
                                                .map((item) => item.value)
                                                .includes(meat.value)}
                                            onChange={() => setMeatType(meat)}
                                        >
                                            {meat.label}
                                        </Checkbox>
                                    ))}
                                </VStack>
                            </CheckboxGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Тип гарнира:</FormLabel>
                            <CheckboxGroup
                                colorScheme='gray'
                                value={filters.selectedSideType.map((s) => s.value)}
                            >
                                <VStack
                                    align='start'
                                    sx={{ '& .chakra-checkbox__label': { fontSize: '14px' } }}
                                >
                                    {sideDishTypes.map((side) => {
                                        const isPotato = side.label === 'Картошка';
                                        const dataTestValue = isPotato
                                            ? 'checkbox-картошка'
                                            : 'none';

                                        return (
                                            <Checkbox
                                                data-test-id={dataTestValue}
                                                key={side.value}
                                                value={side.value}
                                                isChecked={filters.selectedSideType
                                                    .map((item) => item.value)
                                                    .includes(side.value)}
                                                onChange={() => setSideType(side)}
                                            >
                                                {side.label}
                                            </Checkbox>
                                        );
                                    })}
                                </VStack>
                            </CheckboxGroup>
                        </FormControl>

                        <AllergensFilter
                            flexGrow={0}
                            flexShrink={1}
                            selectWidth='100%'
                            switchId='eliminateAllergens_2'
                            type='drawer'
                        />

                        <Flex gap={4} flexWrap='wrap' flexGrow={1} alignContent='flex-end'>
                            {allSelectedFilters.map((item, index) => (
                                <Tag
                                    data-test-id='filter-tag'
                                    size='md'
                                    key={`${item}-${index}`}
                                    borderRadius='6px'
                                    borderColor='lime.400'
                                    bg='lime.100'
                                    color='lime.700'
                                    colorScheme='lime'
                                >
                                    <TagLabel>{item}</TagLabel>
                                    <TagCloseButton onClick={() => removeTag(item)} />
                                </Tag>
                            ))}
                        </Flex>

                        <Box mt='auto' pt={4}>
                            <HStack justifyContent='flex-end' spacing={2}>
                                <Button
                                    data-test-id='clear-filter-button'
                                    variant='outline'
                                    colorScheme='black'
                                    size={{ base: 'sm', lg: 'lg' }}
                                    onClick={() => dispatch(resetFilters())}
                                >
                                    Очистить фильтр
                                </Button>
                                <Button
                                    data-test-id='find-recipe-button'
                                    bg='black'
                                    _hover={{ bg: 'black' }}
                                    color='white'
                                    size={{ base: 'sm', lg: 'lg' }}
                                    onClick={searchRecipesHandler}
                                    isDisabled={isSearchDisabled}
                                    cursor={isSearchDisabled ? 'not-allowed' : 'pointer'}
                                    pointerEvents={isSearchDisabled ? 'none' : 'auto'}
                                >
                                    Найти рецепт
                                </Button>
                            </HStack>
                        </Box>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
