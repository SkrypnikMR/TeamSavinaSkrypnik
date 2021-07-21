import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialGame } from './types';
import * as actions from './actions';

const actionTypes1 = actions;
type TActions = typeof actionTypes1;
export type TActionsRegistration = ActionType<TActions>;

export const initialState: TInitialGame = {
    rooms: [],
    userLogin: localStorage.getItem('login') || '',
    actualRoom: localStorage.getItem('actualRoom')
        ? JSON.parse(localStorage.getItem('actualRoom'))
        : { gameType: '', creatorLogin: '', guestLogin: '', startTime: 0, id: '', stepDoList: [] },
};

export const reducer: Reducer<TInitialGame, TActionsRegistration> = (state = initialState, action) => {
    switch (action.type) {
        case AT.PUT_ROOMS: return { ...state, rooms: action.payload };
        case AT.SET_USER_LOGIN: return { ...state, userLogin: action.payload };
        case AT.SET_ACTUAL_ROOM: return { ...state, actualRoom: action.payload };
        default: return state;
    }
};
