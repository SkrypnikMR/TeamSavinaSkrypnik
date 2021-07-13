import { actionTypes } from '../actionTypes';

export interface IState{
    email: string;
    password: string;
    success: boolean;
    isLoading: boolean;
}
interface ISetValue{
    type: typeof actionTypes.SET_VALUE;
    payload: { name: string; value: boolean | string };
}


export type IAction = ISetValue;
