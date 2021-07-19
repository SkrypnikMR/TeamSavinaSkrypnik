import * as actions from '../actions';
import { actionTypes } from '../actionTypes';

describe('game actions', () => {
    describe('actions.setLoginValue', () => {
        it('toBe defined', () => {
            expect(actions.getSockJSConnection).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.getSockJSConnection).toBe('function');
        });
        it('should return value', () => {
            expect(actions.getSockJSConnection()).toEqual({ type: actionTypes.GET_SOCKJS_CONNECTION });
        });
    });
    describe('actions.putRooms', () => {
        it('toBe defined', () => {
            expect(actions.putRooms).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.putRooms).toBe('function');
        });
        it('should return value', () => {
            const payload = [{ creatorLogin: 'KekShrek', gameType: 'Checkers', id: 'dsadgashdg-324-dsadsad' }];
            expect(actions.putRooms(payload)).toEqual({ type: actionTypes.PUT_ROOMS, payload });
        });
    });
    describe('actions.setUserLogin', () => {
        it('toBe defined', () => {
            expect(actions.setUserLogin).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setUserLogin).toBe('function');
        });
        it('should return value', () => {
            const payload = 'KekShrek';
            expect(actions.setUserLogin(payload)).toEqual({ type: actionTypes.SET_USER_LOGIN, payload });
        });
    });
    describe('actions.joinRoom', () => {
        it('toBe defined', () => {
            expect(actions.joinRoom).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.joinRoom).toBe('function');
        });
        it('should return value', () => {
            const payload = 'adhsadjshdsajshdgsad-1321236251s-dsa';
            expect(actions.joinRoom(payload)).toEqual({ type: actionTypes.JOIN_ROOM, payload });
        });
    });
    describe('actions.playWithBot', () => {
        it('toBe defined', () => {
            expect(actions.playWithBot).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.playWithBot).toBe('function');
        });
        it('should return value', () => {
            const payload = 'adhsadjshdsajshdgsad-1321236251s-dsa';
            expect(actions.playWithBot(payload)).toEqual({ type: actionTypes.PLAY_WITH_BOT, payload });
        });
    });
});
