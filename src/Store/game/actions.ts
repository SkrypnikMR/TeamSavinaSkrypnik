import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRoom } from './types';

export const getSockJSConnection = () => action(AT.GET_SOCKJS_CONNECTION);
export const putRooms = (payload: TRoom[]) => action(AT.PUT_ROOMS, payload);
export const setUserLogin = (payload: string) => action(AT.SET_USER_LOGIN, payload);
export const joinRoom = (payload: string) => action(AT.JOIN_ROOM, payload);
export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);
