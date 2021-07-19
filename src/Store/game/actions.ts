import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';

export const getSockJSConnection = () => action(AT.GET_SOCKJS_CONNECTION);
