import { FormControl, Icon, Input, Select, Show } from '@chakra-ui/icons';
import {
    Flex,
    FormLabel,
    Heading,
    IconButton,
    InputGroup,
    InputRightElement,
    Switch,
    Text,
} from '@chakra-ui/react';

import FilterIcon from '~/icons/FilterIcon';
import SearchIcon from '~/icons/SearchIcon';
import { PageTitlePropsType } from '~/types/PageTitleType';

import {
    FilterButtonStyles,
    FormControlBoxStyles,
    FormControlStyles,
    FormLabelStyles,
    FormSelectStyles,
    HeaderPageContentStyles,
    PageSubTitleStyles,
    PageTitleStyles,
    SearchingBoxStyles,
    SearchingIconBoxStyles,
    SearchingInputBoxStyles,
    SearchingInputStyles,
} from './SearchingContent.styles';

export const SearchingContent = ({ title, children }: PageTitlePropsType) => (
    <Flex sx={HeaderPageContentStyles}>
        <Heading as='h1' sx={PageTitleStyles}>
            {title}
        </Heading>
        {children && <Text sx={PageSubTitleStyles}>{children}</Text>}
        <Flex sx={SearchingBoxStyles}>
            <IconButton
                aria-label='Filter'
                icon={<FilterIcon boxSize={{ base: '14px', lg: '24px' }} />}
                sx={FilterButtonStyles}
            />
            <InputGroup sx={SearchingInputBoxStyles}>
                <Input
                    placeholder='Название или ингредиент...'
                    sx={SearchingInputStyles}
                    size={{ base: 'sm', lg: 'lg' }}
                />
                <InputRightElement sx={SearchingIconBoxStyles}>
                    <Icon as={SearchIcon} boxSize={{ base: '14px', xl: '18px' }} />
                </InputRightElement>
            </InputGroup>
        </Flex>
        <Show above='lg'>
            <Flex sx={FormControlBoxStyles}>
                <FormControl sx={FormControlStyles}>
                    <FormLabel htmlFor='removeAllergens' sx={FormLabelStyles}>
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='removeAllergens' size='lg' />
                </FormControl>
                <Select
                    placeholder='Выберите из списка...'
                    size='md'
                    w='234px'
                    flexShrink={0}
                    sx={FormSelectStyles}
                />
            </Flex>
        </Show>
    </Flex>
);
