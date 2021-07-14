import { actionTypes } from './actionTypes';
import {
    TPayload,
    TReturnSetValue,
    TReturnSendLoginRequest,
    TReturnClearLoginInputs,
    TReturnReciveErrorRequest,
    TReturnReciveSuccessRequest,
} from './types/allTypes';

export const setLoginValue = (payload: TPayload): TReturnSetValue => ({ type: actionTypes.SET_VALUE, payload });
export const sendLoginRequest = () : TReturnSendLoginRequest => ({ type: actionTypes.SEND_LOGIN_REQUEST });
export const clearLoginInputs = () : TReturnClearLoginInputs => ({ type: actionTypes.CLEAR_INPUTS_VALUES });
export const reciveSuccessRequest = (): TReturnReciveSuccessRequest => ({ type: actionTypes.LOGIN_REQUEST_SUCCESS });
export const reciveErrorRequest = (): TReturnReciveErrorRequest => ({ type: actionTypes.LOGIN_REQUEST_ERROR });
export const setValue = (payload: TPayload): TReturnSetValue => ({ type: actionTypes.SET_VALUE, payload });
