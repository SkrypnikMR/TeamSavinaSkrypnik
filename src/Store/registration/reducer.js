import { actionTypes } from './actionTypes';

export const initialState = {
    email: '',
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
    success: null,
    isLoading: false,
    error: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case actionTypes.SEND_REGISTRATION_REQUEST:
            return { ...state, isLoading: true };
        case actionTypes.REGISTRATION_REQUEST_SUCCESS:
            return { ...state, isLoading: false, success: false };
        case actionTypes.REGISTRATION_REQUEST_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case actionTypes.CLEAR_INPUTS_VALUES:
            return {
                ...state,
                email: '',
                password: '',
                confirm: '',
                firstName: '',
                lastName: '',
            };
        default: return { ...state };
    }
};
