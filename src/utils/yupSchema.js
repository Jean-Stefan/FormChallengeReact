import * as yup from 'yup';

export const schema = yup
    .object({
        name: yup
            .string()
            .matches(/^[\w]+(?:\s[\w]+)+$/, 'Fullname invalid')
            .required('Fullname invalid'),
        email: yup
            .string()
            .matches(
                /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
                'Email invalid',
            )
            .required('Email invalid'),
        password: yup
            .string()
            .matches(/^[0-9]{6,9}$/, 'Password invalid')
            .required('Password invalid'),
        phone: yup
            .string()
            .matches(/^([(][0-9]{2}[)]) ([0-9]{5})-([0-9]{4})/, 'Phone invalid')
            .required(),
        birthday: yup
            .date()
            .typeError('Age invalid')
            .min('1901-01-01', 'Age invalid')
            .required('Age invalid'),
        checkbox: yup.boolean().isTrue('You must agree with terms'),
    })
    .required();
