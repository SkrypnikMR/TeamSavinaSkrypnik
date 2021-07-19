import { support } from './support';

const { setTokenInCookie,
    getTokenFromCookie,
    deleteTokenFromCookie } = support;

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
});
