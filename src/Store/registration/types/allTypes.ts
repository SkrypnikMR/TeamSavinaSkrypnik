import { actionTypes } from '../actionTypes';

export type TPay = { name: string, value: any };
export type IPayload = boolean | string | TPay;
export type ISendRegistrationRequest = {
    type: typeof actionTypes.SEND_REGISTRATION_REQUEST,
    payload: any
}
export type ISetRegistrationValue = {
    type: typeof actionTypes.SET_VALUE,
    payload?: IPayload
}
export type IReciveErrorRequest = {
    type: typeof actionTypes.REGISTRATION_REQUEST_ERROR,
    payload: any
}
export type IReciveSuccessRequest = {
    type: typeof actionTypes.REGISTRATION_REQUEST_SUCCESS,
    payload: any
}
export type IClearRegistrationInputs = {
    type: typeof actionTypes.CLEAR_INPUTS_VALUES,
    payload: any
}
export type TInitialState = {
     login: string,
    password: string,
    confirm: string,
    success: boolean,
    isLoading: boolean,
    error: boolean,
}
export type TRegValues = {
    login: string;
    password: string;
    confirm: string;
}

export type IActions = ISetRegistrationValue
    | ISendRegistrationRequest
    | ISetRegistrationValue
    | IReciveErrorRequest
    | IReciveSuccessRequest;
