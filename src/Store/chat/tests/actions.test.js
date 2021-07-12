import * as actions from '../actions';
import { actionTypes } from '../actionTypes';

describe('registration actions', () => {
    describe('actions.setValue', () => {
        it('toBe defined', () => {
            expect(actions.setValue).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setValue).toBe('function');
        });
        it('should return value', () => {
            const payload = { themeMode: 'dark' };
            expect(actions.setValue(payload)).toEqual({ type: actionTypes.SET_VALUE, payload });
        });
    });
    describe('actions.connection', () => {
        it('toBe defined', () => {
            expect(actions.connection).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.connection).toBe('function');
        });
        it('should return value', () => {
            expect(actions.connection()).toEqual({ type: actionTypes.CONNECT });
        });
    });
    describe('actions.putOnlineUsers', () => {
        it('toBe defined', () => {
            expect(actions.putOnlineUsers).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.putOnlineUsers).toBe('function');
        });
        it('should return value', () => {
            const payload = { id: 1, email: 'kek@gmail.com', firstName: 'Max', lastName: 'Skripnik' };
            expect(actions.putOnlineUsers(payload)).toEqual({ type: actionTypes.PUT_ONLINE_USERS, payload });
        });
    });
    describe('actions.putMessages', () => {
        it('toBe defined', () => {
            expect(actions.putMessages).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.putMessages).toBe('function');
        });
        it('should return value', () => {
            const payload = { author: 'kek@gmail.com', messageText: 'kek', messageTime: '12321321' };
            expect(actions.putMessages(payload)).toEqual({ type: actionTypes.PUT_MESSAGES, payload });
        });
    });
    describe('actions.sendNewMessage', () => {
        it('toBe defined', () => {
            expect(actions.sendNewMessage).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.sendNewMessage).toBe('function');
        });
        it('should return value', () => {
            expect(actions.sendNewMessage()).toEqual({ type: actionTypes.SEND_NEW_MESSAGE });
        });
    });
    describe('actions.init', () => {
        it('toBe defined', () => {
            expect(actions.init).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.init).toBe('function');
        });
        it('should return value', () => {
            expect(actions.init()).toEqual({ type: actionTypes.INIT_CHAT });
        });
    });
    describe('actions.getAllRooms', () => {
        it('toBe defined', () => {
            expect(actions.getAllRooms).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.getAllRooms).toBe('function');
        });
        it('should return value', () => {
            expect(actions.getAllRooms()).toEqual({ type: actionTypes.GET_ALL_ROOMS });
        });
    });
    describe('actions.getAllUsers', () => {
        it('toBe defined', () => {
            expect(actions.getAllUsers).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.getAllUsers).toBe('function');
        });
        it('should return value', () => {
            expect(actions.getAllUsers()).toEqual({ type: actionTypes.GET_ALL_USERS });
        });
    });
    describe('actions.getAllMessages', () => {
        it('toBe defined', () => {
            expect(actions.getAllMessages).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.getAllMessages).toBe('function');
        });
        it('should return value', () => {
            expect(actions.getAllMessages()).toEqual({ type: actionTypes.GET_ALL_MESSAGES });
        });
    });
});
