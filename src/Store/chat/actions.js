import { actionTypes } from './actionTypes';

export const init = () => ({ type: actionTypes.INIT_CHAT });
export const setValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const connection = () => ({ type: actionTypes.CONNECT });
export const putOnlineUsers = payload => ({ type: actionTypes.PUT_ONLINE_USERS, payload });

export const getAllRooms = () => ({ type: actionTypes.GET_ALL_ROOMS });
export const sendRoomsRequest = () => ({ type: actionTypes.SEND_ROOMS_REQUEST });
export const reciveSuccessRoomsRequest = () => ({ type: actionTypes.ROOMS_REQUEST_SUCCESS });
export const reciveErrorRoomsRequest = () => ({ type: actionTypes.ROOMS_REQUEST_ERROR });
export const setAllRooms = payload => ({ type: actionTypes.SET_ALL_ROOMS, payload });
export const putMessagesFolders = payload => ({ type: actionTypes.PUT_MESSAGES_FOLDERS, payload });

export const getAllMessages = () => ({ type: actionTypes.GET_ALL_MESSAGES });
export const sendMessagesRequest = () => ({ type: actionTypes.SEND_MESSAGES_REQUEST });
export const reciveSuccessMessagesRequest = () => ({ type: actionTypes.MESSAGES_REQUEST_SUCCESS });
export const reciveErrorMessagesRequest = () => ({ type: actionTypes.MESSAGES_REQUEST_ERROR });
export const putMessages = payload => ({ type: actionTypes.PUT_MESSAGES, payload });

export const sendNewMessage = () => ({ type: actionTypes.SEND_NEW_MESSAGE });
export const putNewMessages = payload => ({ type: actionTypes.PUT_NEW_MESSAGES, payload });


export const createNewRoom = payload => ({ type: actionTypes.CREATE_NEW_ROOM, payload });
export const putNewRoom = payload => ({ type: actionTypes.PUT_NEW_ROOM, payload });

export const readAllMessagesInRoom = payload => ({ type: actionTypes.READ_ALL_MESSAGES_IN_ROOM, payload });
export const resetUnreadCount = payload => ({ type: actionTypes.RESET_UNREAD_COUNT, payload });

export const getAllUsers = () => ({ type: actionTypes.GET_ALL_USERS });
export const sendUsersRequest = () => ({ type: actionTypes.SEND_USERS_REQUEST });
export const reciveSuccessUsersRequest = payload => ({ type: actionTypes.USERS_REQUEST_SUCCESS, payload });
export const reciveErrorUsersRequest = () => ({ type: actionTypes.USERS_REQUEST_ERROR });

export const setUserInRoom = payload => ({ type: actionTypes.SET_USER_IN_ROOM, payload });
export const logOutAction = () => ({ type: actionTypes.LOG_OUT });
export const putMessageAudio = payload => ({ type: actionTypes.PUT_MESSAGE_AUDIO, payload });
