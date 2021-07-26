import { Stomp } from '@stomp/stompjs';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { v4 as uuidv4 } from 'uuid';
import { askBotStep, setStepOrder, setActualRoom, setWinner, setStepHistory, getStepOrder as actionGetStepOrder } from '../actions';
import { getStepOrderSelector, getActualRoom, getUserLogin } from '../selectors';

import { stompClient } from '../saga';

import { support } from '../../../helpers/support';
import { routes } from '../../../constants/routes';
import * as sagas from '../saga';

jest.mock('../../../index', () => ({ store: { dispatch: jest.fn() } }));
Date.now = jest.fn().mockReturnValue(1);

describe('gameSaga', () => {
    beforeEach(() => {
        sagas.setStompClient({ send: jest.fn(), subscribe: jest.fn() });
    });
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
                .call([localStorage, localStorage.getItem], 'actualRoom')
                .next(null)
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
    describe('workerSubscribeRoom', () => {
        it('should call workerSubscribeRoom', () => {
            const payload = 'someuuuuuuoid';
            testSaga(sagas.workerSubscribeRoom, { payload })
                .next()
                .call([sagas.stompClient, sagas.stompClient.subscribe],
                    `${routes.ws.subs.newGame}${payload}`, support.subGame)
                .next()
                .isDone();
        });
    });
    describe('createRoomSaga', () => {
        it('should call createRoomSaga', () => {
            const payload = 'Checkers';
            const userLogin = 'kekShrek';
            const token = 'sometokenstring';
            const uuid = '21361287362183127836213';
            const testBody = JSON.stringify({
                creatorLogin: userLogin,
                gameType: payload,
                id: uuid,
            });
            testSaga(sagas.createRoomSaga, { payload })
                .next()
                .select(getUserLogin)
                .next(userLogin)
                .call(uuidv4)
                .next(uuid)
                .call([support, support.getTokenFromCookie], 'token')
                .next(token)
                .call([sagas.stompClient, sagas.stompClient.send],
                     routes.ws.actions.createRoom, { Authorization: token }, testBody)
                .next()
                .call([sagas.stompClient, sagas.stompClient.send],
                    routes.ws.actions.getRooms, { Authorization: token })
                .next()
                .isDone();
        });
    });
    describe('workerJoinRoom', () => {
        it('should call workerJoinRoom', () => {
            const payload = '1237123821y3hdasdsahd';
            const userLogin = 'kekShrek';
            const testBody = JSON.stringify({
                guestLogin: userLogin,
                id: payload,
            });
            testSaga(sagas.workerJoinRoom, { payload })
                .next()
                .select(getUserLogin)
                .next(userLogin)
                .call([sagas.stompClient, sagas.stompClient.send], routes.ws.actions.joinRoom, {}, testBody)
                .next()
                .call([sagas.stompClient, sagas.stompClient.send], routes.ws.actions.getRooms)
                .next()
                .isDone();
        });
    });
    describe('workerGetStepOrder', () => {
        it('should call workerJoinRoom', () => {
            const payload = { gameType: 'Checkers', uuid: '2187378213621y312321' };
            const testBody = JSON.stringify({ gameType: payload.gameType });
            testSaga(sagas.workerGetStepOrder, { payload })
                .next()
                .call([sagas.stompClient, sagas.stompClient.send],
                     routes.ws.actions.getStepOrder, { uuid: payload.uuid }, testBody)
                .next()
                .isDone();
        });
    });
    describe('workerTicStep', () => {
        it('should call workerTicStep', () => {
            const payload = '4';
            const testActualRoom = { id: '213123213', gameType: 'Chekers' };
            const testLogin = 'KekShrek';
            const testBody = JSON.stringify({
                gameType: testActualRoom.gameType,
                stepDto: {
                    login: testLogin,
                    step: payload,
                    time: Date.now(),
                    id: testActualRoom.id,
                },
            });
            testSaga(sagas.workerTicStep, { payload })
                .next()
                .select(getActualRoom)
                .next(testActualRoom)
                .select(getUserLogin)
                .next(testLogin)
                .call([sagas.stompClient, sagas.stompClient.send],
                    routes.ws.actions.doStep, { uuid: testActualRoom.id },
                    testBody)
                .next()
                .put(actionGetStepOrder(
                    {
                        gameType: testActualRoom.gameType,
                        uuid: testActualRoom.id,
                    }))
                .next()
                .isDone();
        });
    });
    describe('workerCleanOldGame', () => {
            it('should call workerCleanOldGame', () => {
            testSaga(sagas.workerCleanOldGame)
                .next()
                .call([localStorage, localStorage.removeItem], 'actualRoom')
                .next()
                .call([localStorage, localStorage.removeItem], 'stepHistory')
                .next()
                .put(setStepHistory([]))
                .next()
                .isDone();
        });
    });
    describe('workerAddBot', () => {
        it('should call workerAddBot', () => {
            const payload = '21u3127398217398217398213';
            testSaga(sagas.workerAddBot, { payload })
                .next()
                .call(sagas.workerBotSub, payload)
                .next()
                .call([stompClient, stompClient.send], routes.ws.actions.joinRoom,
                    {}, JSON.stringify({ guestLogin: 'Bot', id: payload }))
                .next()
                .call([stompClient, stompClient.send], routes.ws.actions.getRooms)
                .next()
                .isDone();
        });
    });
    describe('workerAskBotStep', () => {
        it('should call workerAddBot', () => {
            const actualRoom = { id: '121212', gameType: 'Tic-tac-toe' };
            testSaga(sagas.workerAskBotStep)
                .next()
                .select(getActualRoom)
                .next(actualRoom)
                .call([stompClient, stompClient.send], routes.ws.actions.getBotStep,
                    { uuid: actualRoom.id }, JSON.stringify(actualRoom))
                .next()
                .isDone();
        });
    });
    describe('workerBotSub', () => {
        it('should call workerBotSub', () => {
            const payload = '1232132132131231';
            testSaga(sagas.workerBotSub, payload)
                .next()
                .call([stompClient, stompClient.subscribe], `${routes.ws.subs.botStep}${payload}`, support.subBot)
                .next()
                .isDone();
        });
    });
    describe('workerDoBotStepTic', () => {
        it('should call workerDoBotStepTic', () => {
            const payload = '4';
            const actualRoom = { id: '121212', gameType: 'Tic-tac-toe' };
            testSaga(sagas.workerDoBotStepTic, { payload })
                .next()
                .select(getActualRoom)
                .next(actualRoom)
                .call([stompClient, stompClient.send], routes.ws.actions.doStep,
                    { uuid: actualRoom.id }, JSON.stringify({
                        gameType: actualRoom.gameType,
                        stepDto: {
                            login: 'Bot',
                            step: payload,
                            time: Date.now(),
                            id: actualRoom.id,
                        },
                    }))
                .next()
                .call(sagas.workerGetStepOrder, {
                    payload:
                        { gameType: actualRoom.gameType, uuid: actualRoom.id },
                })
                .next()
                .isDone();
        });
    });
    describe('workerGameEvent', () => {
        it('should call workerGameEvent, parsedBody with winner field', () => {
            const parsedBody = { winner: 'Maxim' };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .put(setWinner(parsedBody.winner))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with field field', () => {
            const parsedBody = { field: ['null', 'X', 'O'] };
            const payload = JSON.stringify(parsedBody);
            const stringifyField = JSON.stringify(parsedBody.field);
            const actualRoom = { id: '213218963218392183', gameType: 'Tic-tac-toe' };
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .select(getActualRoom)
                .next(actualRoom)
                .call([JSON, JSON.stringify], parsedBody.field)
                .next(stringifyField)
                .call([localStorage, localStorage.setItem], 'stepHistory', stringifyField)
                .next()
                .put(setStepHistory(parsedBody.field))
                .next()
                .put(actionGetStepOrder({ uuid: actualRoom.id, gameType: actualRoom.gameType }))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with stepDtoList field', () => {
            const parsedBody = {
                stepDtoList: [],
                id: '21312312',
                creatorLogin: 'Me',
                guestLogin: 'Bot',
                gameType: 'Tic-tac-toe',
            };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .call([JSON, JSON.stringify], [])
                .next(JSON.stringify([]))
                .put(setActualRoom(parsedBody))
                .next()
                .put(actionGetStepOrder(
                    { uuid: parsedBody.id, gameType: parsedBody.gameType }))
                .next()
                .put(setWinner(''))
                .next()
                .call([localStorage, localStorage.setItem], 'actualRoom', payload)
                .next()
                .call([localStorage, localStorage.setItem], 'stepHistory', JSON.stringify([]))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with stepOrderLogin field, === stepOrderSelector', () => {
            const parsedBody = {
                stepOrderLogin: 'KekShrek',
            };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .select(getStepOrderSelector)
                .next('KekShrek')
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with stepOrderLogin field !== stepOrderSelector', () => {
            const parsedBody = {
                stepOrderLogin: 'Bot',
            };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .select(getStepOrderSelector)
                .next('Kek')
                .put(askBotStep())
                .next()
                .put(setStepOrder(parsedBody.stepOrderLogin))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with stepOrderLogin field !== stepOrderSelector !== Bot', () => {
            const parsedBody = {
                stepOrderLogin: 'grek',
            };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .select(getStepOrderSelector)
                .next('Kek')
                .put(setStepOrder(parsedBody.stepOrderLogin))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody without all', () => {
            const parsedBody = {};
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .isDone();
        });
    });
});
