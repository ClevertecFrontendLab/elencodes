import { Text, VStack } from '@chakra-ui/react';

import { CheckboxItem } from '~/components';
import { CHECKBOX } from '~/constants/data-test-ids';

type Option = {
    label: string;
    value: string;
};

type FilterCheckboxListProps = {
    title: string;
    options: Option[];
    selected: string[];
    onToggle: (value: string) => void;
};

export const FilterCheckboxList = ({
    title,
    options,
    selected,
    onToggle,
}: FilterCheckboxListProps) => (
    <VStack spacing={0} align='start' w='100%' pt={2}>
        <Text fontSize='md' fontWeight={500} mb={1}>
            {title}
        </Text>
        {options.map(({ label, value }) => (
            <CheckboxItem
                key={value}
                value={value}
                label={label}
                isChecked={selected.includes(value)}
                onCustomToggle={onToggle}
                px={0}
                py={1}
                dataTestId={CHECKBOX + label.toLowerCase()}
            />
        ))}
    </VStack>
);
