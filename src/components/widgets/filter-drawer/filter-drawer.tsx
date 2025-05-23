import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormControl,
    FormLabel,
    HStack,
    Switch,
    VStack,
} from '@chakra-ui/react';
import { UnknownAction } from '@reduxjs/toolkit';
import { ChangeEvent } from 'react';

import { FilterCheckboxList, MultiSelect, TagListWithRemove } from '~/components';
import {
    ALLERGEN_MENU_BUTTON_FILTER,
    ALLERGENS_SWITCHER_FILTER,
    CLEAR_FILTER_BUTTON,
    CLOSE_FILTER_DRAWER,
    FILTER_DRAWER,
    FILTER_MENU_BUTTON_CATEGORY,
    FILTER_TAG,
    FIND_RECIPE_BUTTON,
} from '~/constants/data-test-ids';
import { FILTER_TITLES } from '~/constants/filter-titles';
import { BUTTON_EXCLUDE_ALLERGENS, PLACEHOLDER_SELECT_DRAWER } from '~/constants/placeholders';
import { useFilterQueryParams } from '~/hooks/use-filter-query-params.tsx';
import { INITIAL_PAGE_NUM } from '~/query/constants/recipe-consts.ts';
import { useLazyGetRecipesWithFiltersQuery } from '~/query/services/recipes/recipes-api.ts';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { selectCategoriesOptions } from '~/redux/selectors.ts';
import {
    clearAllergens,
    selectAllergens,
    selectIsExcludeEnabled,
    selectSelectedAllergens,
    setSelectedAllergens,
    toggleExcludeAllergens,
} from '~/redux/slices/allergens-slice.ts';
import {
    clearAuthors,
    selectAuthors,
    selectSelectedAuthors,
    setSelectedAuthors,
} from '~/redux/slices/authors-slice.ts';
import {
    clearSelectedCategories,
    selectSelectedCategories,
    setSelectedCategories,
} from '~/redux/slices/category-slice.ts';
import {
    clearSides,
    selectSelectedSides,
    selectSides,
    setSelectedSides,
} from '~/redux/slices/garnish-slice.ts';
import {
    clearMeats,
    selectMeats,
    selectSelectedMeats,
    setSelectedMeats,
} from '~/redux/slices/meat-slice.ts';
import {
    clearPage,
    setFilteredRecipes,
    setHasMore,
    setIsFiltering,
    setShowedEmptyText,
} from '~/redux/slices/recipes-slice.ts';
import { clearInputValue } from '~/redux/slices/search-slice.ts';

type FilterDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const FilterDrawer = ({ isOpen, onClose }: FilterDrawerProps) => {
    const dispatch = useAppDispatch();
    const [trigger] = useLazyGetRecipesWithFiltersQuery();

    const allergensOptions = useAppSelector(selectAllergens);
    const categoriesOptions = useAppSelector(selectCategoriesOptions);
    const authorsOptions = useAppSelector(selectAuthors);
    const meatOptions = useAppSelector(selectMeats);
    const sidesOptions = useAppSelector(selectSides);

    const selectedAllergens = useAppSelector(selectSelectedAllergens);
    const isExcludeEnabled = useAppSelector(selectIsExcludeEnabled);
    const selectedCategories = useAppSelector(selectSelectedCategories);
    const selectedAuthors = useAppSelector(selectSelectedAuthors);
    const selectedMeats = useAppSelector(selectSelectedMeats);
    const selectedSides = useAppSelector(selectSelectedSides);

    const params = useFilterQueryParams();

    const isButtonDisabled =
        selectedAllergens.length === 0 &&
        !isExcludeEnabled &&
        selectedCategories.length === 0 &&
        selectedAuthors.length === 0 &&
        selectedMeats.length === 0 &&
        selectedSides.length === 0;

    const handleToggle = (
        list: string[],
        updateAction: (values: string[]) => UnknownAction,
        value: string,
    ) => {
        const updated = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
        dispatch(updateAction(updated));
    };

    const handleClear = () => {
        [
            clearSelectedCategories,
            clearAllergens,
            clearSides,
            clearAuthors,
            clearMeats,
            clearInputValue,
        ].forEach((action) => dispatch(action()));
    };

    const handleApplyFilters = async () => {
        dispatch(clearPage());
        dispatch(setIsFiltering(true));
        dispatch(setShowedEmptyText(false));

        try {
            const result = await trigger({ ...params, page: INITIAL_PAGE_NUM }).unwrap();

            if (result?.data.length > 0) {
                dispatch(setFilteredRecipes(result.data));
                dispatch(setHasMore(INITIAL_PAGE_NUM < result.meta.totalPages));
            } else {
                dispatch(setFilteredRecipes([]));
                dispatch(setShowedEmptyText(true));
            }
        } finally {
            dispatch(setIsFiltering(false));
        }

        onClose();
        handleClear();
    };

    const handleCategoriesChange = (values: string[]) => {
        dispatch(setSelectedCategories(values));
    };

    const handleAuthorsChange = (values: string[]) => {
        dispatch(setSelectedAuthors(values));
    };

    const handleAllergensChange = (values: string[]) => {
        dispatch(setSelectedAllergens(values));
    };

    const handleAllergenSwitchToggle = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleExcludeAllergens(event.target.checked));
    };

    const handleTagRemove = (value: string) => {
        if (selectedMeats.includes(value)) {
            dispatch(setSelectedMeats(selectedMeats.filter((v) => v !== value)));
        }
        if (selectedSides.includes(value)) {
            dispatch(setSelectedSides(selectedSides.filter((v) => v !== value)));
        }
    };

    return (
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent maxW={{ base: '344px', md: '424px' }} data-test-id={FILTER_DRAWER}>
                <DrawerCloseButton
                    top={{ base: 4, md: 8 }}
                    right={{ base: 4, md: 8 }}
                    borderRadius='full'
                    bg='black'
                    size='sm'
                    color='white'
                    data-test-id={CLOSE_FILTER_DRAWER}
                />
                <DrawerHeader pt={{ base: 4, md: 8 }} px={{ base: 4, md: 8 }}>
                    Фильтр
                </DrawerHeader>
                <DrawerBody
                    px={{ base: 4, md: 8 }}
                    sx={{
                        '&::-webkit-scrollbar': {
                            width: '6px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0, 0, 0, 0.16)',
                            borderRadius: '8px',
                        },
                    }}
                >
                    <VStack align='start' spacing={4}>
                        <MultiSelect
                            selected={selectedCategories}
                            onChange={handleCategoriesChange}
                            options={categoriesOptions}
                            placeholder={FILTER_TITLES.CATEGORY}
                            minWidth={{ base: '309px', md: '365px' }}
                            dataTestId={FILTER_MENU_BUTTON_CATEGORY}
                            tagDataTestId={FILTER_TAG}
                        />
                        <MultiSelect
                            selected={selectedAuthors}
                            onChange={handleAuthorsChange}
                            options={authorsOptions}
                            placeholder={FILTER_TITLES.AUTHOR_SEARCH}
                            minWidth={{ base: '309px', md: '365px' }}
                            tagDataTestId={FILTER_TAG}
                        />
                        <FilterCheckboxList
                            title={FILTER_TITLES.MEAT}
                            options={meatOptions}
                            selected={selectedMeats}
                            onToggle={(value) =>
                                handleToggle(selectedMeats, setSelectedMeats, value)
                            }
                        />
                        <FilterCheckboxList
                            title={FILTER_TITLES.SIDE}
                            options={sidesOptions}
                            selected={selectedSides}
                            onToggle={(value) =>
                                handleToggle(selectedSides, setSelectedSides, value)
                            }
                        />
                        <FormControl display='flex' alignItems='center' pt={2}>
                            <FormLabel htmlFor='exclude-allergens' mb='0'>
                                {BUTTON_EXCLUDE_ALLERGENS}
                            </FormLabel>
                            <Switch
                                data-test-id={ALLERGENS_SWITCHER_FILTER}
                                colorScheme='lime'
                                id='exclude-allergens'
                                isChecked={isExcludeEnabled}
                                onChange={handleAllergenSwitchToggle}
                            />
                        </FormControl>
                        <MultiSelect
                            selected={selectedAllergens}
                            onChange={handleAllergensChange}
                            options={allergensOptions}
                            isCustomInputEnabled
                            isDisabled={!isExcludeEnabled}
                            placeholder={PLACEHOLDER_SELECT_DRAWER}
                            minWidth={{ base: '309px', md: '365px' }}
                            dataTestId={ALLERGEN_MENU_BUTTON_FILTER}
                            isAllergens
                            tagDataTestId={FILTER_TAG}
                        />
                    </VStack>
                </DrawerBody>
                <DrawerFooter flexDirection='column' px={{ base: 4, md: 8 }}>
                    {(selectedMeats.length > 0 || selectedSides.length > 0) && (
                        <TagListWithRemove
                            selected={[...selectedMeats, ...selectedSides]}
                            options={[...meatOptions, ...sidesOptions]}
                            onRemove={handleTagRemove}
                        />
                    )}
                    <HStack spacing={2} py={4} flexWrap='wrap' w='100%' justify='end'>
                        <Button
                            size={{ base: 'sm', md: 'md' }}
                            variant='outline'
                            colorScheme='black'
                            onClick={handleClear}
                            data-test-id={CLEAR_FILTER_BUTTON}
                        >
                            Очистить фильтр
                        </Button>
                        <Button
                            size={{ base: 'sm', md: 'md' }}
                            variant='solid'
                            bgColor='black'
                            color='white'
                            onClick={handleApplyFilters}
                            isDisabled={isButtonDisabled}
                            pointerEvents={isButtonDisabled ? 'none' : 'auto'}
                            data-test-id={FIND_RECIPE_BUTTON}
                        >
                            Найти рецепт
                        </Button>
                    </HStack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
