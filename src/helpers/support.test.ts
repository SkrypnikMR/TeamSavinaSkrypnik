import { NotificationManager } from 'react-notifications';
import { support } from './support';
import { store } from '../index';
import { doBotStepTic, gameEvent } from '../store/game/actions';

const { setTokenInCookie,
    getTokenFromCookie,
    deleteTokenFromCookie,
    errorCatcher, subGame, subBot } = support;

jest.mock('react-notifications', () => ({
    NotificationManager: { error: jest.fn() },
}));
jest.mock('../index', () => ({
    store: { dispatch: jest.fn() },
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
    describe('subGame', () => {
        it('should be defined', () => {
            expect(subGame).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof subGame).toBe('function');
        });
        it('should call store.dispatch with gameEvent', () => {
            const payload = '{ gameType: \'\', creatorLogin: \'\', guestLogin: \'\', startTime: 0, id: \'\', stepDoList: [] }';
            subGame({ body: payload });
            expect(store.dispatch).toHaveBeenCalledWith(gameEvent(payload));
        });
    });
    describe('subBot', () => {
        it('should be defined', () => {
            expect(subBot).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof subBot).toBe('function');
        });
        it('should call store.dispatch with gameEvent', () => {
            const payload = '4';
            subBot({ body: payload });
            expect(store.dispatch).toHaveBeenCalledWith(doBotStepTic(payload));
        });
    });
});
