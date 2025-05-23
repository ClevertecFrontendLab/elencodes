import { ModalBody } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormRegister } from 'react-hook-form';

import { GlobalSpinner } from '~/components';
import { AuthRegistrationForm } from '~/components/widgets/auth-registration-form/auth-regictration-form.tsx';
import { ResultModal, ResultModalProps } from '~/components/wrappers/result-modal/result-modal';
import { MODAL_RESET_CREDS, SIGN_UP_FORM } from '~/constants/data-test-ids.ts';
import { TOAST_MESSAGES } from '~/constants/toast-messages';
import { useCustomToast } from '~/hooks/use-custom-toast';
import { StatusCodes, Statuses } from '~/query/constants/status-codes';
import { useResetPasswordMutation } from '~/query/services/auth/auth-api';
import { authInfoSchema, AuthInfoSchemaType, SignUpSchemaType } from '~/schemas/sign-up.schema.ts';

type AccountRecoveryModalProps = Omit<ResultModalProps, 'children'> & {
    email: string;
};

const { RestorePassword, ServerErrorToast } = TOAST_MESSAGES;

export const AccountRecoveryModal = ({ email, ...restProps }: AccountRecoveryModalProps) => {
    const { toast } = useCustomToast();
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<AuthInfoSchemaType>({
        mode: 'onChange',
        resolver: yupResolver(authInfoSchema),
    });

    const handleFormSubmit = async (data: AuthInfoSchemaType) => {
        try {
            await resetPassword({ email, ...data }).unwrap();
            restProps.onClose();
            toast({ ...RestorePassword[StatusCodes.OK], status: Statuses.SUCCESS }, false);
        } catch (_error) {
            toast(ServerErrorToast);
        }
    };

    const handleBlur = (field: keyof AuthInfoSchemaType, value: string) => {
        setValue(field, value.trim(), { shouldValidate: true });
    };

    return (
        <>
            <ResultModal
                {...restProps}
                dataTestId={MODAL_RESET_CREDS}
                title='Восстановление аккаунта'
            >
                <ModalBody alignSelf='center' mb={4}>
                    <form data-test-id={SIGN_UP_FORM} onSubmit={handleSubmit(handleFormSubmit)}>
                        <AuthRegistrationForm
                            register={register as unknown as UseFormRegister<SignUpSchemaType>}
                            errors={errors}
                            onBlur={handleBlur}
                            isFormSubmitting={isSubmitting}
                        />
                    </form>
                </ModalBody>
            </ResultModal>
            <GlobalSpinner isOpen={isLoading} />
        </>
    );
};
