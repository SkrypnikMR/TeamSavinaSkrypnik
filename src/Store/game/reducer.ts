import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialGame } from './types';
import * as actions from './actions';
import { INITIAL_STATE_FOR_CHECKER } from '../../constants/componentsСonsts';

const actionTypes1 = actions;
type TActions = typeof actionTypes1;
export type TActionsRegistration = ActionType<TActions>;

export const initialState: TInitialGame = {
    rooms: [],
    userLogin: localStorage.getItem('login') || '',
    checker: {
        desk: INITIAL_STATE_FOR_CHECKER,
    },
    currentChecker: {},
};

export const reducer: Reducer<TInitialGame, TActionsRegistration> = (state = initialState, action) => {
    switch (action.type) {
        case AT.PUT_ROOMS: return { ...state, rooms: action.payload };
        case AT.SET_USER_LOGIN: return { ...state, userLogin: action.payload };
        case AT.SET_CURRENT_CHECKER: return {
            ...state,
           currentChecker: action.payload.currentChecker,
        };
        default: return state;
    }
};
