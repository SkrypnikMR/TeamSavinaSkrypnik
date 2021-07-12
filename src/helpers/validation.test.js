import { validation } from './validation';

describe('validation', () => {
    describe('loginValidation', () => {
        it('should be defined', () => {
            expect(validation.loginValidation).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof validation.loginValidation).toBe('function');
        });
        it('should return "Invalid email" ', () => {
            const candidate = {
                email: 'keepcalm312000',
                password: 'asdasdsadsad',
            };
            expect(validation.loginValidation(candidate)).toEqual({ message: 'invalid_email', isValid: false });
        });
        it('should return "Invalid password" ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asd',
            };
            expect(validation.loginValidation(candidate)).toEqual({ message: 'invalid_password', isValid: false });
        });
        it('should return false ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
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
        it('should return "Invalid email" ', () => {
            const candidate = {
                email: 'keepcalm312000',
                password: 'asdasdsadsad',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: 'invalid_email', isValid: false });
        });
        it('should return "Invalid password" ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asd',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asd',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: 'invalid_password', isValid: false });
        });
        it('should return "Invalid First name!" ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
                firstName: 'A',
                lastName: 'Rashev',
                confirm: 'asdasdsad',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: 'invalid_first_name', isValid: false });
        });
        it('should return "Invalid Last name!" ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
                firstName: 'Alexey',
                lastName: 'R',
                confirm: 'asdasdsad',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: 'invalid_last_name', isValid: false });
        });
        it('should return password mismatch ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: 'password_mismatch', isValid: false });
        });
        it('should return false', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsadsad',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toEqual({ message: '', isValid: true });
        });
    });
});
