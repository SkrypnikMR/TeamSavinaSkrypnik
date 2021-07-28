import * as actions from '../actions';
import { actionTypes } from '../actionTypes';

describe('login actions', () => {
    describe('actions.setLoginValue', () => {
        it('toBe defined', () => {
            expect(actions.setLoginValue).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setLoginValue).toBe('function');
        });
        it('should return value', () => {
            const payload = { name: 'login', value: 'newLogin' };
            expect(actions.setLoginValue(payload)).toEqual({ type: actionTypes.SET_VALUE, payload });
        });
    });
      describe('actions.setValue', () => {
        it('toBe defined', () => {
            expect(actions.setValue).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setValue).toBe('function');
        });
        it('should return value', () => {
            const payload = { name: 'login', value: 'newLogin' };
            expect(actions.setValue(payload)).toEqual({ type: actionTypes.SET_VALUE, payload });
        });
    });
    describe('actions.sendLoginRequest', () => {
        it('toBe defined', () => {
            expect(actions.sendLoginRequest).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.sendLoginRequest).toBe('function');
        });
        it('should return value', () => {
            expect(actions.sendLoginRequest())
                .toEqual({ type: actionTypes.SEND_LOGIN_REQUEST });
        });
    });
    describe('actions.clearLoginInputs', () => {
        it('toBe defined', () => {
            expect(actions.clearLoginInputs).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.clearLoginInputs).toBe('function');
        });
        it('should return value', () => {
            expect(actions.clearLoginInputs())
                .toEqual({ type: actionTypes.CLEAR_INPUTS_VALUES });
        });
    });
    describe('actions.reciveSuccessRequest', () => {
        it('toBe defined', () => {
            expect(actions.reciveSuccessRequest).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.reciveSuccessRequest).toBe('function');
        });
        it('should return value', () => {
            expect(actions.reciveSuccessRequest())
                .toEqual({ type: actionTypes.LOGIN_REQUEST_SUCCESS });
        });
    });
    describe('actions.reciveErrorRequest', () => {
        it('toBe defined', () => {
            expect(actions.reciveErrorRequest).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.reciveErrorRequest).toBe('function');
        });
        it('should return value', () => {
            expect(actions.reciveErrorRequest())
                .toEqual({ type: actionTypes.LOGIN_REQUEST_ERROR });
        });
    });
});
