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
    stepOrder: '',
    stepHistory: localStorage.getItem('stepHistory')
        ? JSON.parse(localStorage.getItem('stepHistory'))
        : [],
    winner: '',
    possibleSteps: [],
};

export const reducer: Reducer<TInitialGame, TActionsRegistration> = (state = initialState, action) => {
    switch (action.type) {
        case AT.PUT_ROOMS: return { ...state, rooms: action.payload };
        case AT.SET_USER_LOGIN: return { ...state, userLogin: action.payload };
        case AT.SET_ACTUAL_ROOM: return { ...state, actualRoom: action.payload };
        case AT.SET_STEP_ORDER: return { ...state, stepOrder: action.payload };
        case AT.SET_STEP_HISTORY: return { ...state, stepHistory: action.payload };
        case AT.SET_WINNER: return { ...state, winner: action.payload };
        case AT.PUT_POSSIBLE_STEPS: return { ...state, possibleSteps: action.payload };
        default: return state;
    }
};
