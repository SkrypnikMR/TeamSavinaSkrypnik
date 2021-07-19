import { reducer, initialState } from '../reducer';
import * as actions from '../actions';

describe('gameReducer', () => {
    it('PUT_ROOMS', () => {
        const rooms = [
            { creatorLogin: 'KekShrek', gameType: 'Checkers', id: 'dashgdsahgd213123-dsadhsakd' },
            { creatorLogin: 'qwerty', gameType: 'Checkers', id: 'dashgdsahgd213123-dsadhsakd2133222s' },
        ];
        expect(reducer(initialState, actions.putRooms(rooms))).toEqual({ ...initialState, rooms });
    });
    it('SET_USER_LOGIN', () => {
        const testUserLogin = 'KekShrek';
        expect(reducer(initialState, actions.setUserLogin(testUserLogin)))
            .toEqual({ ...initialState, userLogin: testUserLogin });
    });
});
