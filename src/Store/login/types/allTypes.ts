import { actionTypes } from '../actionTypes';

export interface IState{
    login: string;
    password: string;
    success: boolean;
    isLoading: boolean;
}
type TSetter = { name: string; value: boolean | string }
interface ISetValue{
    type: typeof actionTypes.SET_VALUE;
    payload: TSetter;
}
export type TPayload = string | boolean | TSetter
export type IAction = ISetValue;
export type TReturnSetValue = { type: typeof actionTypes.SET_VALUE, payload: TPayload };
export type TReturnSendLoginRequest = { type: typeof actionTypes.SEND_LOGIN_REQUEST };
export type TReturnClearLoginInputs = { type: typeof actionTypes.CLEAR_INPUTS_VALUES };
export type TReturnReciveSuccessRequest = { type: typeof actionTypes.LOGIN_REQUEST_SUCCESS };
export type TReturnReciveErrorRequest = { type: typeof actionTypes.LOGIN_REQUEST_ERROR };
