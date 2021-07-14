import { actionTypes } from '../actionTypes';


export type IPayload = boolean | string | {name: string, value: any};
export type ISendRegistrationRequest = {
    type: typeof actionTypes.SEND_REGISTRATION_REQUEST
}
export type ISetRegistrationValue = {
    type: typeof actionTypes.SET_VALUE,
    payload?: IPayload
}
export type IReciveErrorRequest = {
    type: typeof actionTypes.REGISTRATION_REQUEST_ERROR,
    payload?: IPayload
}
export type IReciveSuccessRequest = {
    type: typeof actionTypes.REGISTRATION_REQUEST_SUCCESS
}
export type IClearRegistrationInputs = {
    type: typeof actionTypes.CLEAR_INPUTS_VALUES
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

export type IActions = ISendRegistrationRequest | ISetRegistrationValue | IReciveErrorRequest | IReciveSuccessRequest;
