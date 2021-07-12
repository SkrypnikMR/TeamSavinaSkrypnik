import { actionTypes } from './actionTypes';

export const setRegistrationValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const sendRegistrationRequest = () => ({ type: actionTypes.SEND_REGISTRATION_REQUEST });
export const clearRegistrationInputs = () => ({ type: actionTypes.CLEAR_INPUTS_VALUES });
export const reciveSuccessRequest = () => ({ type: actionTypes.REGISTRATION_REQUEST_SUCCESS });
export const reciveErrorRequest = payload => ({ type: actionTypes.REGISTRATION_REQUEST_ERROR, payload });
