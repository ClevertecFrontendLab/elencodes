import { StatusCodes } from '~/query/constants/status-codes';

export const TOAST_MESSAGES = {
    SignUpToast: {
        [StatusCodes.BAD_REQUEST]: {
            id: 'sign-up-bad-request',
        },
    },
    EmailVerifiedToast: {
        [StatusCodes.OK]: {
            title: 'Верификация прошла успешно',
            id: 'email-verification-success',
        },
    },
    SignInToast: {
        [StatusCodes.UNAUTHORIZED]: {
            title: 'Неверный логин или пароль',
            description: 'Попробуйте снова.',
            id: 'sign-in-unauthorized',
        },
        [StatusCodes.FORBIDDEN]: {
            title: 'E-mail не верифицирован',
            description: 'Проверьте почту и перейдите по ссылке',
            id: 'sign-in-forbidden',
        },
    },
    ForgotPasswordToast: {
        [StatusCodes.FORBIDDEN]: {
            title: 'Такого e-mail нет',
            description: 'Попробуйте другой e-mail или проверьте правильность его написания',
            id: 'send-verification-code-forbidden',
        },
    },
    RestorePassword: {
        [StatusCodes.OK]: {
            title: 'Восстановление данных успешно',
            id: 'restore-credentials-success',
        },
    },
    ServerErrorToast: {
        title: 'Ошибка сервера',
        description: 'Попробуйте немного позже',
        id: 'server-error',
    },
} as const;
