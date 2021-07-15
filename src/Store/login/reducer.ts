import { actionTypes } from './actionTypes';
import { IState, IAction } from './types/allTypes';

export const initialState: IState = {
    login: '',
    password: '',
    success: false,
    isLoading: false,
};

export const reducer = (state:IState = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.SET_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case actionTypes.SEND_LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case actionTypes.LOGIN_REQUEST_SUCCESS:
            return { ...state, isLoading: false };
        case actionTypes.LOGIN_REQUEST_ERROR:
            return { ...state, isLoading: false };
        case actionTypes.CLEAR_INPUTS_VALUES:
            return {
                ...state,
                login: '',
                password: '',
            };
        default: return { ...state };
    }
};
