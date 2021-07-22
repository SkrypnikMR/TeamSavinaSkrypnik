import { Stomp } from '@stomp/stompjs';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { support } from '../../../helpers/support';
import { routes } from '../../../constants/routes';
import * as sagas from '../saga';

describe('loginSaga', () => {
    describe('fork', () => {
        it('should fork watchers', () => {
            expectSaga(sagas.watcherGame)
                .put({ type: 'FORKED' })
                .run();
        });
    });
    describe('init', () => {
        it('should be defined', () => {
            expect(sagas.init).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof sagas.init).toBe('function');
         });
        it('should call send method with right argument', () => {
            const socket = new WebSocket('ws:localhost:8080');
            const stompClient = Stomp.over(socket);
            stompClient.send = jest.fn();
            sagas.init(stompClient);
            expect(stompClient.send).toHaveBeenCalledWith(routes.ws.actions.getRooms);
        });
    });
    describe('workerConnection', () => {
        it('should call workerLogin without Error', () => {
            const token = 'someVeryAwesomeTokenStringVeryVeryLong';
            const socket = new WebSocket('ws:localhost:8080');
            const stompClient = Stomp.over(socket);
            testSaga(sagas.workerConnection)
                .next()
                .call([support, support.getTokenFromCookie], 'token')
                .next(token)
                .call(sagas.connection, token)
                .next(stompClient)
                .call(sagas.createStompChannel, stompClient)
                .next()
                .call(sagas.init, stompClient)
                .next()
                .isDone();
        });
        it('should go in catch block, ', () => {
            const error = new Error('error');
            testSaga(sagas.workerConnection)
                .next()
                .throw(error)
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
    });
});
