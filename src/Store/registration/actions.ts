import { actionTypes } from './actionTypes';
import * as types from './types/allTypes';


export const setRegistrationValue = (payload: types.IPayload)
    : types.ISetRegistrationValue => ({ type: actionTypes.SET_VALUE, payload });
export const sendRegistrationRequest = ()
    : types.ISendRegistrationRequest => ({ type: actionTypes.SEND_REGISTRATION_REQUEST });
export const clearRegistrationInputs = ()
    : types.IClearRegistrationInputs => ({ type: actionTypes.CLEAR_INPUTS_VALUES });
export const reciveSuccessRequest = ()
    : types.IReciveSuccessRequest => ({ type: actionTypes.REGISTRATION_REQUEST_SUCCESS });
export const reciveErrorRequest = ()
    : types.IReciveErrorRequest => ({ type: actionTypes.REGISTRATION_REQUEST_ERROR });
