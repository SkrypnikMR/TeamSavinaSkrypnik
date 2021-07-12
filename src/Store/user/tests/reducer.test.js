import { reducer, initialState } from '../reducer';
import { setAuthValues, setValue } from '../actions';

describe('userReducer', () => {
    it('SET_VALUE', () => {
        const testValue = 'themeMode';
        const testName = 'dark';
        expect(reducer(initialState, setValue({ name: `${testName}`, value: `${testValue}` })))
            .toEqual({ ...initialState, [testName]: testValue });
    });
    it('SET_AUTH_VALUES', () => {
        const token = 'tokenSomeToken';
        const userInfo = {
            id: 1,
            email: 'skripnikMRW@gmai.com',
            firstName: 'Max',
            lastName: 'Skripnik',
        };
        expect(reducer(initialState, setAuthValues({ token, userInfo })))
            .toEqual({
                ...initialState,
                token,
                userInfo,
            });
    });
    it('default', () => expect(reducer(initialState, {})).toEqual(initialState));
});
