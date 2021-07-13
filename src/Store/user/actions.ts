import { actionTypes } from './actionTypes';

export const setValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const setAuthValues = payload => ({ type: actionTypes.SET_AUTH_VALUES, payload });
export const changeUserData = payload => ({ type: actionTypes.CHANGE_USER_DATA, payload });
export const setNewUserData = () => ({ type: actionTypes.SET_NEW_USER_DATA });
