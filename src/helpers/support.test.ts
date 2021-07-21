import { support } from './support';
import { NotificationManager } from 'react-notifications';

const { setTokenInCookie,
    getTokenFromCookie,
    deleteTokenFromCookie,
    errorCatcher } = support;

jest.mock('react-notifications', () => ({
    NotificationManager: { error: jest.fn() },
}));

describe('support', () => {
    describe('setTokenInCookie', () => {
        it('should be defined', () => {
            expect(setTokenInCookie).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof setTokenInCookie).toBe('function');
        });
        it('should set in Cookie', () => {
            const token = 'sometokenahahahihihi';
            setTokenInCookie(token);
            expect(getTokenFromCookie('token')).toBe(token);
            deleteTokenFromCookie('token');
        });
    });
    describe('getTokenFromCookie', () => {
        it('should be defined', () => {
            expect(getTokenFromCookie).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof getTokenFromCookie).toBe('function');
        });
        it('should get token from Cookie', () => {
            const token = 'sometokenahahahihihi';
            setTokenInCookie(token);
            expect(getTokenFromCookie('token')).toBe(token);
            deleteTokenFromCookie('token');
        });
    });
    describe('deleteTokenFromCookie', () => {
        it('should be defined', () => {
            expect(deleteTokenFromCookie).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof deleteTokenFromCookie).toBe('function');
        });
        it('should delete token from Cookie', () => {
            const token = 'sometokenahahahihihi';
            setTokenInCookie(token);
            deleteTokenFromCookie('token');
            expect(getTokenFromCookie('token')).toBe(undefined);
        });
    });
    describe('errorCatcher', () => {
        it('should be defined', () => {
            expect(errorCatcher).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof errorCatcher).toBe('function');
        });
        it('should call NotificationManager.error with right arguments', () => {
            const errorMessage = 'error message';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            errorCatcher(message);
            expect(NotificationManager.error).toHaveBeenCalledWith(errorMessage, undefined, 3000);
        });
    });
});
