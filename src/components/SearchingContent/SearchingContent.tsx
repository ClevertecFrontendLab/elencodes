import { Icon, Input, Show } from '@chakra-ui/icons';
import {
    Button,
    Flex,
    Heading,
    IconButton,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { ChangeEvent, KeyboardEvent, ReactNode, useCallback, useState } from 'react';

import { PLACEHOLDER_SEARCH_INPUT } from '~/constants/placeholders';
import { DATA_TEST_ID } from '~/constants/test-id';
import FilterIcon from '~/icons/filterIcons/filterIcon';
import SearchIcon from '~/icons/inputIcons/searchIcon';
import { resetFilters, setSearchQuery, toggleSearchModeOnPage } from '~/model/filterSlice.ts';
import { selectFilters } from '~/model/selectors.ts';
import { useAppDispatch, useAppSelector } from '~/store/hooks.ts';

import { AllergensFilter } from '../AllergensFilter/AllergensFilter';
import { Filter } from '../Filter/Filter';
import {
    PageSubTitleStyles,
    PageTitleStyles,
    SearchingBoxStyles,
    SearchingInputBoxStyles,
} from './SearchingContent.styles';

type SearchingContentPropsType = {
    title: string;
    children?: ReactNode;
    isNothingFound?: boolean;
    setIsNothingFound?: (value: boolean) => void;
};

export const SearchingContent = ({
    title,
    children,
    isNothingFound,
    setIsNothingFound,
}: SearchingContentPropsType) => {
    const filter = useAppSelector(selectFilters);
    const dispatch = useAppDispatch();

    const [searchQuery, setsSearchQuery] = useState('');
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

    const closeFilterMenuHandler = useCallback(() => {
        setOpenFilter(false);
        document.body.style.overflow = 'unset';
    }, []);
    const openFilterMenuHandler = useCallback(() => {
        setOpenFilter((prev) => {
            if (prev) return prev;
            return true;
        });
        dispatch(resetFilters());
    }, [dispatch]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsNothingFound?.(false);
        setsSearchQuery(e.currentTarget.value);
        if (e.currentTarget.value === '') {
            dispatch(setSearchQuery(''));
        }
    };

    const searchHandler = () => {
        if (searchQuery.length >= 3) {
            dispatch(setSearchQuery(searchQuery.toLowerCase().trim()));
            dispatch(toggleSearchModeOnPage(true));
        }
    };

    const searchOnEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') searchHandler();
    };

    const hasValue = filter.searchQuery.length > 0;
    const isSearchDisabled = searchQuery.length < 3;
    const shouldShowShadow =
        (isInputFocused || filter.pageAllergenFilter.isActive || hasValue) &&
        !filter.isSearchModeOnPage;

    return (
        <Flex
            maxW={{ base: '360px', md: '480px', lg: '578px', '2xl': '898px' }}
            borderRadius={{ base: '0 0 8px 8px', '2xl': '24px' }}
            direction='column'
            align='center'
            pt={{ base: 4, xl: 8 }}
            pb={{ base: 4, lg: 8 }}
            px={4}
            mb={{ base: 4, xl: 6 }}
            mx={{ base: '-16px', sm: 'auto' }}
            boxShadow={
                shouldShowShadow
                    ? '0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    : 'none'
            }
        >
            <Heading as='h1' sx={PageTitleStyles} textAlign='center'>
                {title}
            </Heading>
            {children && <Text sx={PageSubTitleStyles}>{children}</Text>}
            <Flex sx={SearchingBoxStyles}>
                <IconButton
                    data-test-id={DATA_TEST_ID.filterButton}
                    aria-label='Filter'
                    variant='outline'
                    icon={<FilterIcon boxSize={{ base: '14px', xl: '24px' }} />}
                    boxSize={{ base: '32px', xl: '48px' }}
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    onClick={openFilterMenuHandler}
                />
                <InputGroup sx={SearchingInputBoxStyles}>
                    <Input
                        placeholder={PLACEHOLDER_SEARCH_INPUT}
                        width='100%'
                        size={{ base: 'sm', xl: 'lg' }}
                        border={
                            isNothingFound ? '2px solid #e53e3e' : '1px solid rgba(0, 0, 0, 0.48)'
                        }
                        value={searchQuery}
                        onChange={onChangeHandler}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                        _focus={{
                            borderColor: isNothingFound ? 'red.500' : 'lime.600',
                            boxShadow: 'none',
                        }}
                        onKeyDown={searchOnEnterHandler}
                        isInvalid={isNothingFound}
                        data-test-id={DATA_TEST_ID.searchInput}
                    />
                    <InputRightElement
                        aria-label='search'
                        as={Button}
                        bg='transparent'
                        _hover={{ bg: 'transparent' }}
                        isDisabled={isSearchDisabled}
                        cursor={isSearchDisabled ? 'not-allowed' : 'pointer'}
                        pointerEvents={isSearchDisabled ? 'none' : 'auto'}
                        opacity={isSearchDisabled ? 0.5 : 1}
                        w={{ base: '32px', xl: '48px' }}
                        h={{ base: '32px', xl: '48px' }}
                        onClick={searchHandler}
                        data-test-id={DATA_TEST_ID.searchButton}
                    >
                        <Icon
                            as={SearchIcon}
                            boxSize={{ base: '14px', xl: '18px' }}
                            color={isSearchDisabled ? 'gray.400' : 'current'}
                        />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Show above='xl'>
                <Flex minW='518px' gap={4} alignItems='flex-start'>
                    <AllergensFilter
                        selectWidth='269px'
                        switchId='eliminateAllergens_1'
                        type='page'
                    />
                </Flex>
            </Show>
            <Filter open={openFilter} handleClose={closeFilterMenuHandler} />
        </Flex>
    );
};
