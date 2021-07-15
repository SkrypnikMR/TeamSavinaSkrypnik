import { validation } from './validation';

describe('validation', () => {
    describe('loginValidation', () => {
        it('should be defined', () => {
            expect(validation.loginValidation).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof validation.loginValidation).toBe('function');
        });
        it('should return "Invalid login" ', () => {
            const candidate = {
                login: '',
                password: 'asdasdsadsad',
            };
            expect(validation.loginValidation(candidate)).toEqual({ message: 'invalid_login', isValid: false });
        });
        it('should return "Invalid password" ', () => {
            const candidate = {
                login: 'keepcalm312000@gmail.com',
                password: 'asd',
            };
            expect(validation.loginValidation(candidate)).toEqual({ message: 'invalid_password', isValid: false });
        });
        it('should return false ', () => {
            const candidate = {
                login: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
            };
            expect(validation.loginValidation(candidate)).toEqual({ message: '', isValid: true });
        });
    });
    describe('registrationValidation', () => {
        it('should be defined', () => {
            expect(validation.registrationValidation).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof validation.registrationValidation).toBe('function');
        });
        it('should return "Invalid login" ', () => {
            const candidate = {
                login: '',
                password: 'asdasdsadsad',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: 'invalid_login', isValid: false });
        });
        it('should return "Invalid password" ', () => {
            const candidate = {
                login: 'keepcalm312000@gmail.com',
                password: 'asd',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asd',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: 'invalid_password', isValid: false });
        });
        it('should return password mismatch ', () => {
            const candidate = {
                login: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: 'password_mismatch', isValid: false });
        });
        it('should return false', () => {
            const candidate = {
                login: 'keepcalm312000@gmail.com',
                password: 'asdasdsadsad',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: '', isValid: true });
        });
    });
});
