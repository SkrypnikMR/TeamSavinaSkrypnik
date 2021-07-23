import { NotificationManager } from 'react-notifications';
import { support } from './support';
import { store } from '../index';

const { setTokenInCookie,
    getTokenFromCookie,
    deleteTokenFromCookie,
    errorCatcher, subGame } = support;

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
        it('should call dispatch with setWinner', () => {
            const winner = 'WINNER: ME';
            const message = { body: winner };
            expect(subGame(message)).toBe(1);
            expect(store.dispatch)
                .toHaveBeenCalledWith({ payload: 'ME', type: '@@game/SET_WINNER' });
        });
        it('should return 2', () => {
            const message = { body: '[someArrayMessage]' };
            expect(subGame(message)).toBe(2);
        });
        it('should setStepOrder', () => {
            const message = { body: 'Maxim' };
            expect(subGame(message)).toBe(undefined);
            expect(store.dispatch).toHaveBeenCalledWith({ payload: 'Maxim', type: '@@game/SET_STEP_ORDER' });
        });
        it('should setNewActualRoom', () => {
            const message = {
                body: '{"gameType": "Chekers", "creatorLogin": "Max", "guestLogin" : "NeMax", "startTime": 12321321321312, "id": "1232176372132173"}',
            };
            const getStepOrderPayload = { uuid: '1232176372132173', gameType: 'Chekers' };
            expect(subGame(message)).toBe(1);
            expect(store.dispatch)
                .toHaveBeenCalledWith(
                    {
                        payload: JSON.parse(message.body),
                        type: '@@game/SET_ACTUAL_ROOM',
                    });
            expect(store.dispatch)
                .toHaveBeenCalledWith({ type: '@@game/GET_STEP_ORDER', payload: getStepOrderPayload });
            expect(store.dispatch)
                .toHaveBeenCalledWith({ type: '@@game/SET_WINNER', payload: '' });
            expect(localStorage.getItem('actualRoom')).toBe(message.body);
            expect(localStorage.getItem('stepHistory')).toBe(JSON.stringify([]));
        });
        it('should setHistory', () => {
            const message = {
                body: '{"step": "1"}',
            };
            localStorage.setItem('stepHistory', JSON.stringify([]));
            expect(subGame(message)).toBe(1);
        });
        it('should setHistory and we have old', () => {
            const message = {
                body: '{"step": "1"}',
            };
            localStorage.setItem('stepHistory', JSON.stringify([{ stepCount: 0 }]));
            expect(subGame(message)).toBe(1);
        });
    });
});
