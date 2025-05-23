import * as yup from 'yup';

const NAME_REQUIRED = 'Введите имя';
const SURNAME_REQUIRED = 'Введите фамилию';
const EMAIL_REQUIRED = 'Введите e-mail';
const LOGIN_REQUIRED = 'Введите логин';
const PASSWORD_REQUIRED = 'Введите пароль';
const CONFIRM_PASSWORD_REQUIRED = 'Повторите пароль';
const STARTS_WITH_CYRILLIC = 'Должно начинаться с кириллицы А-Я';
const SHOULD_CONTAIN_CYRILLIC = 'Только кириллица А-Я, и "-"';
const DOESNT_MEET_FORMAT = 'Не соответствует формату';
const CONFIRM_PASSWORD_INVALID = 'Пароли должны совпадать';
const MAX_LENGTH_REQUIRED = 'Максимальная длина 50 символов';
const EMAIL_INCORRECT = 'Введите корректный e-mail';

export const personalInfoSchema = yup.object().shape({
    firstName: yup
        .string()
        .required(NAME_REQUIRED)
        .matches(/^[А-Яа-яЁё]/, STARTS_WITH_CYRILLIC)
        .matches(/^[А-Яа-яЁё-]+$/, SHOULD_CONTAIN_CYRILLIC)
        .max(50, MAX_LENGTH_REQUIRED),
    lastName: yup
        .string()
        .required(SURNAME_REQUIRED)
        .matches(/^[А-Яа-яЁё]/, STARTS_WITH_CYRILLIC)
        .matches(/^[А-Яа-яЁё-]+$/, SHOULD_CONTAIN_CYRILLIC)
        .max(50, MAX_LENGTH_REQUIRED),
    email: yup
        .string()
        .required(EMAIL_REQUIRED)
        .max(50, MAX_LENGTH_REQUIRED)
        .matches(/^[a-zA-Z0-9._%+-]+@(?!(xn--))[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, EMAIL_INCORRECT),
});

export const authInfoSchema = yup.object().shape({
    login: yup
        .string()
        .required(LOGIN_REQUIRED)
        .max(50, MAX_LENGTH_REQUIRED)
        .matches(/^[A-Za-z0-9!@#$&_+\-.]+$/, DOESNT_MEET_FORMAT)
        .min(5, DOESNT_MEET_FORMAT),
    password: yup
        .string()
        .required(PASSWORD_REQUIRED)
        .max(50, MAX_LENGTH_REQUIRED)
        .matches(
            /^(?!.*[А-Яа-яЁё\s])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$&_+-.]{8,}$/,
            DOESNT_MEET_FORMAT,
        )
        .min(8, DOESNT_MEET_FORMAT),
    passwordConfirm: yup
        .string()
        .required(CONFIRM_PASSWORD_REQUIRED)
        .oneOf([yup.ref('password')], CONFIRM_PASSWORD_INVALID),
});

export type AuthInfoSchemaType = yup.InferType<typeof authInfoSchema>;
export type PersonalInfoSchemaType = yup.InferType<typeof personalInfoSchema>;
export type SignUpSchemaType = PersonalInfoSchemaType & AuthInfoSchemaType;

export const SignUpSchema = [
    personalInfoSchema as yup.ObjectSchema<SignUpSchemaType>,
    authInfoSchema as yup.ObjectSchema<SignUpSchemaType>,
];
