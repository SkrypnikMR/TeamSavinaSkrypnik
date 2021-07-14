import { actionTypes } from './actionTypes';
import { IActions, TInitialState } from './types/allTypes';

export const initialState: TInitialState = {
    login: '',
    password: '',
    confirm: '',
    success: false,
    isLoading: false,
    error: false,
};

export const reducer = (state: TInitialState = initialState, action: IActions) => {
    switch (action.type) {
        case actionTypes.SEND_REGISTRATION_REQUEST:
            return { ...state, isLoading: true };
        case actionTypes.REGISTRATION_REQUEST_SUCCESS:
            return { ...state, isLoading: false, success: false };
        case actionTypes.REGISTRATION_REQUEST_ERROR:
            return { ...state, isLoading: false };
        case actionTypes.CLEAR_INPUTS_VALUES:
            return {
                ...state,
                email: '',
                password: '',
                confirm: '',
            };
    case actionTypes.SET_VALUE: return { ...state, [action.payload.name]: action.payload.value };
        default: return state;
    }
};
