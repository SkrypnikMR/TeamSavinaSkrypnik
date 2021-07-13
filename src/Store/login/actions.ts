import { actionTypes } from './actionTypes';

export const setLoginValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const sendLoginRequest = () => ({ type: actionTypes.SEND_LOGIN_REQUEST });
export const clearLoginInputs = () => ({ type: actionTypes.CLEAR_INPUTS_VALUES });
export const reciveSuccessRequest = () => ({ type: actionTypes.LOGIN_REQUEST_SUCCESS });
export const reciveErrorRequest = () => ({ type: actionTypes.LOGIN_REQUEST_ERROR });
export const setValue = payload => ({ type: actionTypes.SET_VALUE, payload });
