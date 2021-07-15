import { actionTypes } from './actionTypes';
import { TypeActionWithoutPayload } from './types/allTypes';

export const getSockJSConnection = (): TypeActionWithoutPayload => ({ type: actionTypes.GET_SOCKJS_CONNECTION });
