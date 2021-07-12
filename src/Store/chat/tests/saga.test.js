import { expectSaga, testSaga } from 'redux-saga-test-plan';
import i18next from 'i18next';
import { NotificationManager } from 'react-notifications';
import { userInfo } from '/src/Store/user/selectors';
import * as sagas from '../saga';
import { newMessage, currentRoom } from '../selectors';
import { actionTypes } from '../actionTypes';
import * as actions from '../actions';
import { getRequest } from '/src/helpers/requests';
import { routes } from '/src/constants/routes';
import { support } from '/src/helpers/support';

describe('chatSaga', () => {
    describe('', () => {
        let action;
        const realGD = global.Date;
        beforeEach(() => {
            global.Date = jest.fn().mockReturnValue({ getTime: jest.fn().mockReturnValue(1) });
        });
        afterEach(() => {
            global.Date = realGD;
        });
        it('should call initSaga', () => {
            action = { type: actionTypes.INIT_CHAT };
            testSaga(sagas.initSaga, action)
                .next()
                .put(actions.connection())
                .next()
                .put(actions.getAllRooms())
                .next()
                .put(actions.getAllMessages())
                .next()
                .put(actions.getAllUsers())
                .next()
                .isDone();
        });
        it('should call sendMessage with valid info', () => {
            action = { type: actionTypes.SEND_NEW_MESSAGE };
            testSaga(sagas.sendMessageSaga, action)
                .next()
                .select(userInfo)
                .next({ email: 'SkipnikMRW@gmail.com' })
                .select(newMessage)
                .next('kek')
                .select(currentRoom)
                .next({
                    room_id: 1,
                    room_name: 'global',
                })
                .call([sagas.globalSocket, sagas.globalSocket.emit], 'messages', {
                    author: 'SkipnikMRW@gmail.com',
                    text: 'kek',
                    room_name: 'global',
                    room_id: 1,
                    time: 1,
                })
                .next()
                .isDone();
        });
        it('should call sendMessage without  valid message', () => {
            action = { type: actionTypes.SEND_NEW_MESSAGE };
            testSaga(sagas.sendMessageSaga, action)
                .next()
                .select(userInfo)
                .next({ email: 'SkipnikMRW@gmail.com' })
                .select(newMessage)
                .next('')
                .select(currentRoom)
                .next({ room_name: 'global', room_id: 1 })
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('without_text'), i18next.t('input_error'), 2000)
                .next()
                .isDone();
        });
        it('should call sendMessage without  valid room_name', () => {
            action = { type: actionTypes.SEND_NEW_MESSAGE };
            testSaga(sagas.sendMessageSaga, action)
                .next()
                .select(userInfo)
                .next({ email: 'SkipnikMRW@gmail.com' })
                .select(newMessage)
                .next('someMessage')
                .select(currentRoom)
                .next({ room_name: null, room_id: null })
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('without_room'), i18next.t('input_error'), 2000)
                .next()
                .isDone();
        });
        it('should error in sendMessage ', () => {
            action = { type: actionTypes.SEND_NEW_MESSAGE };
            const error = 'error';
            testSaga(sagas.sendMessageSaga, action)
                .next()
                .throw(error)
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
        it('should call connectionSaga ', () => {
            action = { type: actionTypes.CONNECT };
            const channel = jest.fn();
            testSaga(sagas.connectionSaga, action)
                .next()
                .select(userInfo)
                .next({
                    email: 'SkipnikMRW@gmail.com',
                    id: 1,
                    firstName: 'Max',
                    lastName: 'Skripnik',
                    socketID: '21321732137ygsudgasdasd',
                })
                .call(sagas.connect, {
                    email: 'SkipnikMRW@gmail.com',
                    id: 1,
                    firstName: 'Max',
                    lastName: 'Skripnik',
                    socketID: '21321732137ygsudgasdasd',
                })
                .next({ socket: 'eto tipa Socket' })
                .call(sagas.createSocketChannel, { socket: 'eto tipa Socket' })
                .next(channel)
                .take(channel)
                .next({ someChanelfunc: 'da da ya func' })
                .put({ someChanelfunc: 'da da ya func' })
                .next();
        });
        it('should error in connectionSaga ', () => {
            action = { type: actionTypes.CONNECT };
            const error = 'error';
            testSaga(sagas.connectionSaga, action)
                .next()
                .throw(error)
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
        it('should call getAllMessagesSaga', () => {
            const messageFromServer = {
                author: 'SkipnikMRW@gmail.com',
                text: 'kek',
                room_name: 'global',
                room_id: 1,
                time: 1,
            };
            action = { type: actionTypes.GET_ALL_MESSAGES };
            testSaga(sagas.getAllMessagesSaga, action)
                .next()
                .select(userInfo)
                .next({ id: 1 })
                .put(actions.sendMessagesRequest())
                .next()
                .call(getRequest, `${routes.chat.messages}?id=${1}`)
                .next([messageFromServer])
                .put(actions.reciveSuccessMessagesRequest())
                .next()
                .put(actions.putMessages([messageFromServer]))
                .next()
                .isDone();
        });
        it('should error in getAllMessagesSaga ', () => {
            action = { type: actionTypes.GET_ALL_MESSAGES };
            const error = 'error';
            testSaga(sagas.getAllMessagesSaga, action)
                .next()
                .throw(error)
                .put(actions.reciveErrorMessagesRequest())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
        it('should call getAllRoomsSaga', () => {
            const mockRooms = [{ room_id: 1, room_name: 'global' }];
            const mockRoomsFolder = { global: [] };
            action = { type: actionTypes.GET_ALL_ROOMS };
            testSaga(sagas.getAllRoomsSaga, action)
                .next()
                .select(userInfo)
                .next({ id: 1 })
                .put(actions.sendRoomsRequest())
                .next()
                .call(getRequest, `${routes.chat.rooms}?id=${1}`)
                .next(mockRooms)
                .put(actions.reciveSuccessRoomsRequest())
                .next()
                .put(actions.setAllRooms(mockRooms))
                .next()
                .call([support, support.getMessagesFolders], mockRooms)
                .next(mockRoomsFolder)
                .put(actions.putMessagesFolders(mockRoomsFolder))
                .next()
                .call([sagas.globalSocket, sagas.globalSocket.emit], 'join', mockRooms)
                .next()
                .isDone();
        });
        it('should error in getAllRoomsSaga ', () => {
            action = { type: actionTypes.GET_ALL_ROOMS };
            const error = 'error';
            testSaga(sagas.getAllRoomsSaga, action)
                .next()
                .throw(error)
                .put(actions.reciveErrorRoomsRequest())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
        it('should call getAllUsersSaga', () => {
            const messageFromServer = {
                id: 1,
                email: 'nn19092001@gmail.com', 
                firstName: 'NN', 
                lastName: 'NN',
            };
            action = { type: actionTypes.GET_ALL_USERS };
            testSaga(sagas.getAllUsersSaga, action)
                .next()
                .put(actions.sendUsersRequest())
                .next()
                .call(getRequest, routes.chat.users)
                .next([messageFromServer])
                .put(actions.reciveSuccessUsersRequest([messageFromServer]))
                .next()
                .isDone();
        });
        it('should error in getAllUsersSaga ', () => {
            action = { type: actionTypes.GET_ALL_USERS };
            const error = 'error';
            testSaga(sagas.getAllUsersSaga, action)
                .next()
                .throw(error)
                .put(actions.reciveErrorUsersRequest())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
        describe('fork', () => {
            it('should fork watchers', () => {
                expectSaga(sagas.watcherChatOperations)
                    .put({ type: 'FORKED' })
                    .run();
            });
        });
    });
});
