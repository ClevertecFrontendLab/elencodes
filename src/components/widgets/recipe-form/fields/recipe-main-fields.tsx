import {
    FormControl,
    FormLabel,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Textarea,
} from '@chakra-ui/react';
import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form';

import {
    RECIPE_DESCRIPTION,
    RECIPE_PORTIONS,
    RECIPE_TIME,
    RECIPE_TITLE,
} from '~/constants/data-test-ids.ts';
import { CreateRecipeSchemaType } from '~/schemas/create-recipe.schema.ts';

type RecipeMainFieldsProps = {
    register: UseFormRegister<CreateRecipeSchemaType>;
    control: Control<CreateRecipeSchemaType>;
    errors: FieldErrors<CreateRecipeSchemaType>;
};

export const RecipeMainFields = ({ register, control, errors }: RecipeMainFieldsProps) => (
    <>
        <FormControl isInvalid={!!errors.title}>
            <Input
                placeholder='Название рецепта'
                data-test-id={RECIPE_TITLE}
                borderColor='lime.150'
                _focus={{ borderColor: 'lime.150', outline: 'none' }}
                _focusVisible={{ borderColor: 'lime.150', boxShadow: 'none' }}
                _placeholder={{ color: 'blackAlpha.700', fontSize: 'lg' }}
                colorScheme='lime'
                {...register('title' as const)}
            />
        </FormControl>
        <FormControl isInvalid={!!errors.description}>
            <Textarea
                {...register('description' as const)}
                placeholder='Краткое описание рецепта'
                _placeholder={{ color: 'blackAlpha.700', fontSize: 'sm' }}
                data-test-id={RECIPE_DESCRIPTION}
            />
        </FormControl>
        <FormControl
            isInvalid={!!errors.portions}
            display='flex'
            gap={6}
            maxH='40px'
            alignItems='center'
        >
            <FormLabel m={0} fontWeight={600} fontSize={{ base: 'sm', md: 'md' }}>
                На сколько человек ваш рецепт?
            </FormLabel>
            <Controller
                control={control}
                name='portions'
                render={({ field: { onChange, value } }) => (
                    <NumberInput size='md' maxW='90px' value={value} onChange={onChange}>
                        <NumberInputField data-test-id={RECIPE_PORTIONS} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                )}
            />
        </FormControl>
        <FormControl
            isInvalid={!!errors.time}
            display='flex'
            gap={6}
            maxH='40px'
            alignItems='center'
        >
            <FormLabel m={0} fontWeight={600} fontSize={{ base: 'sm', md: 'md' }}>
                Сколько времени готовить в минутах?
            </FormLabel>
            <Controller
                control={control}
                name='time'
                render={({ field: { onChange, value } }) => (
                    <NumberInput value={value} onChange={onChange} size='md' maxW='90px'>
                        <NumberInputField data-test-id={RECIPE_TIME} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                )}
            />
        </FormControl>
    </>
);
