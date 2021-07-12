import { reducer, initialState } from '../reducer';
import {
    putMessages,
    putOnlineUsers,
    setValue,
    putNewMessages,
    setAllRooms,
    sendRoomsRequest,
    reciveSuccessRoomsRequest,
    reciveErrorRoomsRequest,
    sendMessagesRequest,
    reciveSuccessMessagesRequest,
    reciveErrorMessagesRequest,
    putMessagesFolders,
    sendUsersRequest,
    reciveSuccessUsersRequest,
    reciveErrorUsersRequest,
} from '../actions';

describe('userReducer', () => {
    it('SET_VALUE', () => {
        const testValue = 'themeMode';
        const testName = 'dark';
        expect(reducer(initialState, setValue({ name: `${testName}`, value: `${testValue}` })))
            .toEqual({ ...initialState, [testName]: testValue });
    });
    it('PUT_ONLINE_USERS', () => {
        const newUser = [{
            id: 1,
            email: 'skripnikMRW@gmai.com',
            firstName: 'Max',
            lastName: 'Skripnik',
        }];
        expect(reducer(initialState, putOnlineUsers(newUser)))
            .toEqual({
                ...initialState,
                onlineUsers:
                    newUser,
            });
    });
    it('PUT_MESSAGES without needed room', () => {
        const newMessage = [{
            author: 'skripnikMRW@gmai.com',
            messageText: 'kek',
            messageTime: '12321312321',
            room_id: 1,
            room_name: 'global',
        }];
        const expectedArray = {};
        expect(reducer(initialState, putMessages(newMessage)))
            .toEqual({
                ...initialState,
                messages:
                    expectedArray,
            });
    });
    it('PUT_MESSAGES with global room', () => {
        const mockStore = {
            messages: {
                global: [],
            },
        };
        const newMessage = [{
            author: 'skripnikMRW@gmai.com',
            messageText: 'kek',
            messageTime: '12321312321',
            room_id: 1,
            room_name: 'global',
        }];
        const expectedObject = {
            global: newMessage,
        };
        expect(reducer(mockStore, putMessages(newMessage)))
            .toEqual({
                ...mockStore,
                messages:
                    expectedObject,
            });
    });
    it('PUT_MESSAGES without room_name', () => {
        const mockStore = {
            messages: {
                global: [],
            },
        };
        const newMessage = [{
            author: 'skripnikMRW@gmai.com',
            messageText: 'kek',
            messageTime: '12321312321',
            room_id: 1,
        }];
        expect(reducer(mockStore, putMessages(newMessage)))
            .toEqual({
                ...mockStore,
                messages: { global: [] },
            });
    });
    it('PUT_NEW_MESSAGES without needed room', () => {
        const payload = {
            author: 'skripnikMRW@gmai.com',
            messageText: 'kek',
            messageTime: '12321312321',
            room_id: 1,
            room_name: 'global',
        };
        expect(reducer(initialState, putNewMessages(payload)))
            .toEqual({ ...initialState });
    });
    it('PUT_NEW_MESSAGES with needed room', () => {
        const mockStore = {
            messages: {
                global: [],
            },
        };
        const payload = {
            author: 'skripnikMRW@gmai.com',
            messageText: 'kek',
            messageTime: '12321312321',
            room_id: 1,
            room_name: 'global',
        };
        expect(reducer(mockStore, putNewMessages(payload)))
            .toEqual({
                ...mockStore,
                messages: {
                    global: [payload],
                },
            });
    });
    it('SET_ALL_ROOMS', () => {
        const payload = [{ room_id: 1, room_name: 'global' }];
        expect(reducer(initialState, setAllRooms(payload)))
            .toEqual({ ...initialState, rooms: payload });
    });
    it('SEND_ROOMS_REQUEST', () => {
        expect(reducer(initialState, sendRoomsRequest()))
            .toEqual({ ...initialState, isLoading: true });
    });
    it('ROOMS_REQUEST_SUCCESS', () => {
        expect(reducer(initialState, reciveSuccessRoomsRequest()))
            .toEqual({ ...initialState, isLoading: false, error: false });
    });
    it('ROOMS_REQUEST_ERROR', () => {
        expect(reducer(initialState, reciveErrorRoomsRequest()))
            .toEqual({ ...initialState, isLoading: false, error: true });
    });
    it('SEND_MESSAGES_REQUEST', () => {
        expect(reducer(initialState, sendMessagesRequest()))
            .toEqual({ ...initialState, isLoading: true });
    });
    it('MESSAGES_REQUEST_SUCCESS', () => {
        expect(reducer(initialState, reciveSuccessMessagesRequest()))
            .toEqual({ ...initialState, isLoading: false, error: false });
    });
    it('MESSAGES_REQUEST_ERROR', () => {
        expect(reducer(initialState, reciveErrorMessagesRequest()))
            .toEqual({ ...initialState, isLoading: false, error: true });
    });
    it('PUT_MESSAGES_FOLDERS', () => {
        const payload = {
            global: [],
            UTUTU: [],
        };
        expect(reducer(initialState, putMessagesFolders(payload)))
            .toEqual({ ...initialState, messages: payload });
    });
    it('SEND_USERS_REQUEST', () => {
        expect(reducer(initialState, sendUsersRequest()))
            .toEqual({ ...initialState, isLoading: true });
    });
    it('USERS_REQUEST_SUCCESS', () => {
        const payload = {    
                users: [{ id: 1, email: 'nn19092001@gmail.com', firstName: 'NN', lastName: 'NN' }],
        }; 
        expect(reducer(initialState, reciveSuccessUsersRequest(payload)))
            .toEqual({ ...initialState, users: payload, isLoading: false, error: false });
    });
    it('USERS_REQUEST_ERROR', () => {
        expect(reducer(initialState, reciveErrorUsersRequest()))
            .toEqual({ ...initialState, isLoading: false, error: true });
    });
    it('default', () => expect(reducer(undefined, { type: '' })).toEqual(initialState));
});
