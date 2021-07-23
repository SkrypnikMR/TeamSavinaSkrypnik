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
    it('SET_WINNER', () => {
        const winner = 'KekShrek';
        expect(reducer(initialState, actions.setWinner(winner)))
            .toEqual({ ...initialState, winner });
    });
    it('SET_ACTUAL_ROOM', () => {
        const actualRoom = {
                id: '213821732173t213',
                guestLogin: 'Maxik',
                creatorLogin: 'NeMAxik',
                startTime: Date.now(),
            };
        expect(reducer(initialState, actions.setActualRoom(actualRoom)))
            .toEqual({ ...initialState, actualRoom });
    });
    it('SET_STEP_ORDER', () => {
        const stepOrder = 'YOU';
        expect(reducer(initialState, actions.setStepOrder(stepOrder)))
            .toEqual({ ...initialState, stepOrder });
    });
    it('SET_STEP_HISTORY', () => {
        const stepHistory = [
            {
                login: 'ME',
                step: '1',
                time: Date.now(),
                id: '21-3217637217datsyda-dsahdsa',
            },
        ];
        expect(reducer(initialState, actions.setStepHistory(stepHistory)))
            .toEqual({ ...initialState, stepHistory });
    });
});
