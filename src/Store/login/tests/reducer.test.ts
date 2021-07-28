import { reducer, initialState } from '../reducer';
import {
    setLoginValue,
    clearLoginInputs,
    sendLoginRequest,
    reciveSuccessRequest,
    reciveErrorRequest,
} from '../actions';

describe('loginReducer', () => {
    it('SET_VALUE', () => {
        const testValue = 'testValue';
        const testName = 'login';
        expect(reducer(initialState, setLoginValue({ name: `${testName}`, value: `${testValue}` })))
            .toEqual({ ...initialState, [testName]: testValue });
    });
    it('CLEAR_INPUTS_VALUES', () => {
        expect(reducer(initialState, clearLoginInputs()))
            .toEqual({
                ...initialState,
                login: '',
                password: '',
            });
    });
    it('SEND_LOGIN_REQUEST', () => {
        expect(reducer(initialState, sendLoginRequest()))
            .toEqual({
                ...initialState,
                isLoading: true,
            });
    });
    it('LOGIN_REQUEST_SUCCESS', () => {
        expect(reducer(initialState, reciveSuccessRequest()))
            .toEqual({
                ...initialState,
                isLoading: false,
            });
    });
    it('LOGIN_REQUEST_ERROR', () => {
        expect(reducer(initialState, reciveErrorRequest()))
            .toEqual({
                ...initialState,
                isLoading: false,
            });
    });
});
