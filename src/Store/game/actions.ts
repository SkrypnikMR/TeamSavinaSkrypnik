import { actionTypes } from './actionTypes';

export const getSockJSConnection = (): { type: string;} => ({ type: actionTypes.GET_SOCKJS_CONNECTION });
