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
    describe('actions.setAuthValues', () => {
        it('toBe defined', () => {
            expect(actions.setAuthValues).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setAuthValues).toBe('function');
        });
        it('should return value', () => {
            const payload = {
                token: 'newToken',
                userInfo: {
                    id: 1,
                    email: 'Skripnik@gmal.com',
                    firstName: 'Max',
                    lastName: 'Skripnik',
                },
            };
            expect(actions.setAuthValues(payload))
                .toEqual({ type: actionTypes.SET_AUTH_VALUES, payload });
        });
    });
});
