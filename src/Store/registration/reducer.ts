import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialState } from './types';
import * as actions from './actions';

const actionTypes1 = actions;
type TActions = typeof actionTypes1;
export type TActionsRegistration = ActionType<TActions>;


export const initialState: TInitialState = {
    login: '',
    password: '',
    confirm: '',
    success: false,
    isLoading: false,
    error: false,
};

export const reducer: Reducer<TInitialState, TActionsRegistration> = (state = initialState, action) => {
    switch (action.type) {
        case AT.SET_VALUE: return { ...state, [action.payload.name]: action.payload.value };
        case AT.SEND_REGISTRATION_REQUEST:
            return { ...state, isLoading: true };
        case AT.REGISTRATION_REQUEST_SUCCESS:
            return { ...state, isLoading: false, success: false };
        case AT.REGISTRATION_REQUEST_ERROR:
            return { ...state, isLoading: false };
        case AT.CLEAR_INPUTS_VALUES:
            return {
                ...state,
                login: '',
                password: '',
                confirm: '',
            };
        default: return state;
    }
};
