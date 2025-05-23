import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VStack,
} from '@chakra-ui/react';
import { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { NavLink } from 'react-router';

import { PATHS } from '~/app/routes/paths';
import { PasswordInput } from '~/components/ui/password-input/password-input';
import {
    FORM_FORGOT_PASSWORD,
    FORM_LOGIN_INPUT,
    FORM_PASSWORD_INPUT,
    FORM_SIGN_IN,
    FORM_SUBMIT_BUTTON,
} from '~/constants/data-test-ids.ts';
import { LoginSchemaType } from '~/schemas/sign-in.schema.ts';

type Props = {
    formMethods: UseFormReturn<LoginSchemaType>;
    onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
};

export const LoginForm = ({ formMethods, onSubmit }: Props) => {
    const {
        register,
        formState: { errors, isValid },
        setValue,
    } = formMethods;

    const handleBlur = (field: keyof LoginSchemaType, value: string) => {
        setValue(field, value.trim(), { shouldValidate: true });
    };

    return (
        <form onSubmit={onSubmit} data-test-id={FORM_SIGN_IN}>
            <VStack spacing={4} align='stretch'>
                <FormControl isInvalid={!!errors.login}>
                    <FormLabel>Логин входа на сайт</FormLabel>
                    <Input
                        data-test-id={FORM_LOGIN_INPUT}
                        size='lg'
                        variant='auth'
                        {...register('login')}
                        placeholder='Введите логин'
                        onBlur={(e) => handleBlur('login', e.target.value)}
                    />
                    <FormErrorMessage>{String(errors.login?.message)}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                    <FormLabel>Пароль</FormLabel>
                    <PasswordInput
                        input={{
                            ...register('password'),
                            variant: 'auth',
                            placeholder: 'Пароль для сайта',
                        }}
                        dataTestId={FORM_PASSWORD_INPUT}
                    />
                    <FormErrorMessage>{String(errors.password?.message)}</FormErrorMessage>
                </FormControl>

                <Button
                    data-test-id={FORM_SUBMIT_BUTTON}
                    mt='80px'
                    variant='dark'
                    size='lg'
                    type='submit'
                    disabled={!isValid}
                >
                    Войти
                </Button>

                <Box
                    mt={4}
                    textAlign='center'
                    fontWeight='semibold'
                    fontSize='md'
                    _hover={{ textDecoration: 'underline' }}
                    data-test-id={FORM_FORGOT_PASSWORD}
                >
                    <NavLink to={PATHS.RECOVERY}>Забыли логин или пароль?</NavLink>
                </Box>
            </VStack>
        </form>
    );
};
