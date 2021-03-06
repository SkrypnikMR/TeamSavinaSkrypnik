import { NotificationManager } from 'react-notifications';
import moment from 'moment';
import { putPossibleSteps, doBotStepTic, gameEvent } from '../store/game/actions';
import { support } from './support';
import { store } from '../index';

const {
    subBot,
    subGame,
    possibleStep,
    errorCatcher,
    getPrettyDate,
    setTokenInCookie,
    getTokenFromCookie,
    deleteTokenFromCookie,
     } = support;

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
        it('should return 1 and not call NotificationManager with Not your turn Bot', () => {
            const errorMessage = 'Not your turn Bot';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            expect(errorCatcher(message)).toBe(1);
             expect(NotificationManager.error).not.toHaveBeenCalled();
        });
        it('should return 1 and not call NotificationManager with Game with', () => {
            const errorMessage = 'Game with';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            expect(errorCatcher(message)).toBe(undefined);
             expect(NotificationManager.error).not.toHaveBeenCalled();
        });
        it('should return 1 and not call NotificationManager with NOT YOU TURN Bot', () => {
            const errorMessage = 'NOT YOU TURN Bot';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            expect(errorCatcher(message)).toBe(1);
             expect(NotificationManager.error).not.toHaveBeenCalled();
        });
        it('should return 1 and not call NotificationManager with Invalid step Bot1', () => {
            const errorMessage = 'Invalid step Bot1';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            expect(errorCatcher(message)).toBe(1);
             expect(NotificationManager.error).not.toHaveBeenCalled();
        });
        it('should return 1 and not call NotificationManager with Invalid step Bot2', () => {
            const errorMessage = 'Invalid step Bot2';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            expect(errorCatcher(message)).toBe(1);
             expect(NotificationManager.error).not.toHaveBeenCalled();
        });
        it('should return 1 and not call NotificationManager with Invalid step Bot3', () => {
            const errorMessage = 'Invalid step Bot3';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            expect(errorCatcher(message)).toBe(1);
             expect(NotificationManager.error).not.toHaveBeenCalled();
        });
        it('should return 1 and not call NotificationManager with Invalid step {}', () => {
            const errorMessage = 'Invalid step {}';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            expect(errorCatcher(message)).toBe(1);
             expect(NotificationManager.error).not.toHaveBeenCalled();
        });
        it('should return 1 and not call NotificationManager with Permission denied', () => {
            const errorMessage = 'Permission denied';
            const messageBody = JSON.stringify({ body: errorMessage });
            const message = { body: messageBody };
            expect(errorCatcher(message)).toBe(1);
             expect(NotificationManager.error).not.toHaveBeenCalled();
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
    describe('getPrettyDate', () => {
        it('should be defined', () => {
            expect(getPrettyDate).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof getPrettyDate).toBe('function');
        });
        it('should call moment with testTimeStamp and return in format like in func', () => {
            const testTimeStamp = 123123214214;
            expect(getPrettyDate(testTimeStamp))
                .toBe(moment(testTimeStamp).format('L h:mm:ss'));
        });
    });
    describe('possibleStep', () => {
        it('should be defined', () => {
            expect(possibleStep).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof possibleStep).toBe('function');
        });
        it('should call store.dispatch with right action', () => {
            const message = { body: JSON.stringify({ startIndex: 3, stepIndex: 6 }) };
            possibleStep(message);
            expect(store.dispatch).toHaveBeenCalledWith(putPossibleSteps(JSON.parse(message.body)));
        });
    });
});
