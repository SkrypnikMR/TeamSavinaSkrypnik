import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialLogin } from './types';

export const initialState: TInitialLogin = {
    login: '',
    password: '',
    success: false,
    isLoading: false,
};

const actionTypes1 = actions;
type TActions = typeof actionTypes1;
export type TActionLogin = ActionType<TActions>;

export const reducer: Reducer<TInitialLogin, TActionLogin> = (state = initialState, action) => {
    switch (action.type) {
        case AT.SET_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case AT.SEND_LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case AT.LOGIN_REQUEST_SUCCESS:
            return { ...state, isLoading: false };
        case AT.LOGIN_REQUEST_ERROR:
            return { ...state, isLoading: false };
        case AT.CLEAR_INPUTS_VALUES:
            return {
                ...state,
                login: '',
                password: '',
            };
        default: return { ...state };
    }
};
