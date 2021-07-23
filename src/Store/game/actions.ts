import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRoom, TCheckers, TCurrentChecker } from './types';

export const getSockJSConnection = () => action(AT.GET_SOCKJS_CONNECTION);
export const putRooms = (payload: TRoom[]) => action(AT.PUT_ROOMS, payload);
export const setUserLogin = (payload: string) => action(AT.SET_USER_LOGIN, payload);
export const joinRoom = (payload: string) => action(AT.JOIN_ROOM, payload);
export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);
export const createRoom = (payload: string) => action(AT.CREATE_ROOM, payload);
export const logOut = (payload: string) => action(AT.LOG_OUT, payload);

export const setCheckerDesk = (payload: TCheckers) => action(AT.SET_CHECKER_DESK, payload);
export const setCurrentChecker = (payload: TCurrentChecker) => action(AT.SET_CURRENT_CHECKER, payload);
