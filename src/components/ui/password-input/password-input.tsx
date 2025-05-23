import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';

import { FORM_PASSWORD_VISIBILITY } from '~/constants/data-test-ids.ts';

type PasswordInputProps = {
    input: InputProps;
    dataTestId?: string;
};

export const PasswordInput = ({ input: { ...restInput }, dataTestId }: PasswordInputProps) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const showPassword = () => setPasswordVisible(true);
    const hidePassword = () => setPasswordVisible(false);

    return (
        <InputGroup>
            <InputRightElement height='48px'>
                <IconButton
                    onMouseDown={showPassword}
                    onMouseUp={hidePassword}
                    onMouseLeave={hidePassword}
                    variant='unstyled'
                    height='100%'
                    aria-label='password-visibility'
                    data-test-id={FORM_PASSWORD_VISIBILITY}
                >
                    {passwordVisible ? <ViewIcon /> : <ViewOffIcon />}
                </IconButton>
            </InputRightElement>

            <Input
                data-test-id={dataTestId}
                variant='auth'
                size='lg'
                type={passwordVisible ? 'text' : 'password'}
                {...restInput}
            />
        </InputGroup>
    );
};
