import { reducer, initialState } from '../reducer';
import {
    setRegistrationValue,
    clearRegistrationInputs,
    sendRegistrationRequest,
    reciveSuccessRequest,
    reciveErrorRequest,
} from '../actions';

describe('registrationReducer', () => {
    it('SET_VALUE', () => {
        const testValue = 'testValue';
        const testName = 'email';
        expect(reducer(initialState, setRegistrationValue({ name: `${testName}`, value: `${testValue}` })))
            .toEqual({ ...initialState, [testName]: testValue });
    });
    it('SEND_REGISTRATION_REQUEST', () => {
        expect(reducer(initialState, sendRegistrationRequest()))
            .toEqual({ ...initialState, isLoading: true });
    });
    it('REGISTRATION_REQUEST_SUCCESS', () => {
        expect(reducer(initialState, reciveSuccessRequest()))
            .toEqual({ ...initialState, isLoading: false, success: false });
    });
    it('REGISTRATION_REQUEST_ERROR', () => {
        expect(reducer(initialState, reciveErrorRequest()))
            .toEqual({ ...initialState, isLoading: false });
    });
    it('CLEAR_INPUTS_VALUES', () => {
        expect(reducer(initialState, clearRegistrationInputs()))
            .toEqual({
                ...initialState,
                login: '',
                password: '',
                confirm: '',
            });
    });
});
