import { regExp } from '../constants/regExp';

export const validation = {
    registrationValidation: ({ email, password, confirm, firstName, lastName }) => {
        if (!regExp.emailRegExp.test(email) || !email) return { message: 'invalid_email', isValid: false };
        if (!regExp.passwordRegExp.test(password) || !password) return { message: 'invalid_password', isValid: false };
        if (password !== confirm) return { message: 'password_mismatch', isValid: false };
        if (!regExp.firstAndLastNameRegExp.test(firstName) || !firstName) return { message: 'invalid_first_name', isValid: false };
        if (!regExp.firstAndLastNameRegExp.test(lastName) || !lastName) return { message: 'invalid_last_name', isValid: false };
        return { message: '', isValid: true };
    },
    loginValidation: ({ email, password }) => {
        if (!regExp.emailRegExp.test(email) || !email) return { message: 'invalid_email', isValid: false };
        if (!regExp.passwordRegExp.test(password) || !password) return { message: 'invalid_password', isValid: false };
        return { message: '', isValid: true };
    },
    numberValidation: (age) => Number.isNaN(Number(age)),
    inputMyAccountValidation: ({ firstName, lastName }) => {
        if (!regExp.firstAndLastNameRegExp.test(firstName) || !firstName) return { message: 'invalid_first_name', isValid: false };
        if (!regExp.firstAndLastNameRegExp.test(lastName) || !lastName) return { message: 'invalid_last_name', isValid: false };
        return { message: '', isValid: true };
    },
};
