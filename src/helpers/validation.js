import { regExp } from '../constants/regExp';

export const validation = {
    registrationValidation: ({ login, password, confirm }) => {
        if (!regExp.loginRegExp.test(login) || !login) return { message: 'invalid_login', isValid: false };
        if (!regExp.passwordRegExp.test(password) || !password) return { message: 'invalid_password', isValid: false };
        if (password !== confirm) return { message: 'password_mismatch', isValid: false };
        return { message: '', isValid: true };
    },
    loginValidation: ({ login, password }) => {
        if (!regExp.loginRegExp.test(login) || !login) return { message: 'invalid_login', isValid: false };
        if (!regExp.passwordRegExp.test(password) || !password) return { message: 'invalid_password', isValid: false };
        return { message: '', isValid: true };
    },
    numberValidation: age => Number.isNaN(Number(age)),
};
