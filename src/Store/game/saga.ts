import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call, take, put, select } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import { NotificationManager } from 'react-notifications';
import { eventChannel } from 'redux-saga';
import i18next from 'i18next';
import { routes } from '../../constants/routes';
import { getUserLogin, getActualRoom, getStepOrderSelector, getPossibleSteps, getActualRoomId } from './selectors';
import { support } from '../../helpers/support';
import { BOT_NAME, DRAW, CHECKER_FIELD_INIT, CHECKERS } from '../../constants/simpleConstants';
import { actionTypes } from './actionTypes';
import {
    putRooms,
    setActualRoom,
    getStepOrder,
    setStepHistory,
    setWinner,
    setStepOrder,
    askBotStep,
    putPossibleSteps,
} from './actions';

export let stompClient: CompatClient | null = null;
export const setStompClient = (arg: any) => {
    stompClient = arg;
};
export const connection = (token: string) => {
    const socket = new WebSocket(`${routes.baseWebSocketUrl}${routes.ws.game_menu}`);
    stompClient = Stomp.over(socket);
    return new Promise((resolve) => stompClient
         .connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
};
export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
    const roomsSub = stompClient.subscribe(routes.ws.subs.rooms, ({ body }) => emit(putRooms(JSON.parse(body))));
    const errorSub = stompClient.subscribe(routes.ws.subs.user_errors, support.errorCatcher);
    const stepsSub = stompClient.subscribe(routes.ws.subs.user_game, support.possibleStep);
    return () => {
        roomsSub.unsubscribe();
        errorSub.unsubscribe();
        stepsSub.unsubscribe();
    };
});
export const init = (stompClient: CompatClient) => {
    stompClient.send(routes.ws.actions.getRooms);
};
export function* workerConnection() :SagaIterator {
    try {
        const token = yield call([support, support.getTokenFromCookie], 'token');
        const stompClient = yield call(connection, token);
        const stompChannel = yield call(createStompChannel, stompClient);
        yield put(setWinner(''));
        const stringifyActualRoom = yield call([localStorage, localStorage.getItem], 'actualRoom');
        if (stringifyActualRoom) {
            const actualRoom = yield call([JSON, JSON.parse], stringifyActualRoom);
            if (actualRoom.guestLogin === BOT_NAME) yield call(workerBotSub, actualRoom.id);
            yield call(workerSubscribeRoom, { payload: actualRoom.id });
            yield put(setActualRoom(actualRoom));
            yield put(getStepOrder({ gameType: actualRoom.gameType, uuid: actualRoom.id }));
        }
        yield call(init, stompClient);
        while (stompChannel) {
            const action = yield take(stompChannel);
            if (Array.isArray(action.payload)) {
                const userLogin = yield select(getUserLogin);
                const actualRoom = action.payload.find((el) => el.creatorLogin === userLogin);
                if (actualRoom) yield call(workerSubscribeRoom, { payload: actualRoom.id });
            }
            yield put(action);
        }
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* workerSubscribeRoom({ payload }): SagaIterator {
    yield call([stompClient, stompClient.subscribe], `${routes.ws.subs.newGame}${payload}`, support.subGame);
}
export function* workerJoinRoom({ payload }): SagaIterator {
    const userLogin = yield select(getUserLogin); 
    const body = { guestLogin: userLogin, id: payload };
    yield call([stompClient, stompClient.send], routes.ws.actions.joinRoom, {}, JSON.stringify(body));
    yield call([stompClient, stompClient.send], routes.ws.actions.getRooms);
}
export function* createRoomSaga({ payload }): SagaIterator {
    const creatorLogin = yield select(getUserLogin);
    const newUUID = yield call(uuidv4);
    const body = {
        creatorLogin,
        gameType: payload,
        id: newUUID,
    };
    const token: string = yield call([support, support.getTokenFromCookie], 'token');
    yield call(
        [stompClient, stompClient.send], routes.ws.actions.createRoom, { Authorization: token }, JSON.stringify(body),
        );
    yield call([stompClient, stompClient.send], routes.ws.actions.getRooms, { Authorization: token });
}
export function* workerGetStepOrder({ payload }) {
    yield call([stompClient, stompClient.send], routes.ws.actions.getStepOrder,
        { uuid: payload.uuid }, JSON.stringify({ gameType: payload.gameType }));
}
export function* workerTicStep({ payload }) {
    const { id, gameType } = yield select(getActualRoom);
    const userLogin = yield select(getUserLogin);
    yield call([stompClient, stompClient.send], routes.ws.actions.doStep, { uuid: id }, JSON.stringify({
       gameType, stepDto: { login: userLogin, step: payload, time: Date.now(), id },
    }));
   yield put(getStepOrder({ gameType, uuid: id }));
}
export function* workerCleanOldGame() {
    yield call([localStorage, localStorage.removeItem], 'actualRoom');
    yield call([localStorage, localStorage.removeItem], 'stepHistory');
    yield put(setStepHistory([]));
    yield put(setActualRoom({
        gameType: '',
        creatorLogin: '',
        guestLogin: '',
        tartTime: 0,
        id: '',
        stepDoList: [],
    }));
}
export function* workerAddBot({ payload }) {
    const body = { guestLogin: BOT_NAME, id: payload };
    yield call(workerBotSub, payload);
    yield call([stompClient, stompClient.send], routes.ws.actions.joinRoom, {}, JSON.stringify(body));
    yield call([stompClient, stompClient.send], routes.ws.actions.getRooms);
}
export function* workerAskBotStep() {
    const { id, gameType } = yield select(getActualRoom);
    const body = { id, gameType };
    yield call([stompClient, stompClient.send], routes.ws.actions.getBotStep, { uuid: id }, JSON.stringify(body));
}
export function* workerBotSub(payload: string) {
    yield call([stompClient, stompClient.subscribe], `${routes.ws.subs.botStep}${payload}`, support.subBot);
}
export function* workerDoBotStepTic({ payload }) {
    const { id, gameType } = yield select(getActualRoom);
    const userLogin = BOT_NAME;
    yield call([stompClient, stompClient.send], routes.ws.actions.doStep, { uuid: id }, JSON.stringify({
        gameType, stepDto: { login: userLogin, step: payload, time: Date.now(), id },
     }));
    yield call(workerGetStepOrder, { payload: { gameType, uuid: id } });
}
export function* workerGameEvent({ payload }) {
    const parsedBody = yield call([JSON, JSON.parse], payload);
    if (parsedBody.winner === null) return yield put(setWinner(DRAW));
    if (parsedBody.winner) return yield put(setWinner(parsedBody.winner));
    if (parsedBody.field) {
        if (parsedBody.field?.gameField) {
            const { id, gameType } = yield select(getActualRoom);
            const stringifyField = yield call([JSON, JSON.stringify], parsedBody.field.gameField);
            yield call([localStorage, localStorage.setItem], 'stepHistory', stringifyField);
            yield put(setStepHistory(parsedBody.field.gameField));
            return yield put(getStepOrder({ uuid: id, gameType }));
        }
        const { id, gameType } = yield select(getActualRoom);
        const stringifyField = yield call([JSON, JSON.stringify], parsedBody.field);
        yield call([localStorage, localStorage.setItem], 'stepHistory', stringifyField);
        yield put(setStepHistory(parsedBody.field));
        return yield put(getStepOrder({ uuid: id, gameType }));
    }
    if (parsedBody.stepDtoList) {
        let firstStepHistory = yield call([JSON, JSON.stringify], []);
        if (parsedBody.gameType === CHECKERS) {
            firstStepHistory = yield call([JSON, JSON.stringify], CHECKER_FIELD_INIT);
            yield put(setStepHistory(CHECKER_FIELD_INIT));
        }
        yield put(setActualRoom(parsedBody));
        yield put(getStepOrder({ uuid: parsedBody.id, gameType: parsedBody.gameType }));
        yield put(setWinner(''));
        yield call([localStorage, localStorage.setItem], 'actualRoom', payload);
        return yield call([localStorage, localStorage.setItem], 'stepHistory', firstStepHistory);
    }
    if (parsedBody.stepOrderLogin) {
        const actualRoom = yield select(getActualRoom);
        if (actualRoom.gameType === CHECKERS
            && parsedBody.stepOrderLogin === actualRoom.guestLogin) {
            yield put(setStepOrder(actualRoom.creatorLogin));
            const turn = yield select(getStepOrderSelector);
            if (turn === BOT_NAME) yield put(askBotStep());
            return;
        }
        if (actualRoom.gameType === CHECKERS
            && parsedBody.stepOrderLogin === actualRoom.creatorLogin) {
            yield put(setStepOrder(actualRoom.guestLogin));
            const turn = yield select(getStepOrderSelector);
            if (turn === BOT_NAME) yield put(askBotStep());
            return;
        }
        if (parsedBody.stepOrderLogin === BOT_NAME)yield put(askBotStep());
        return yield put(setStepOrder(parsedBody.stepOrderLogin)); 
    }
}
export function* workerDisconnect() {
    yield call([stompClient, stompClient.disconnect]);
}
export function* workerGetPosibleStep({ payload }) {
    const { id, gameType } = yield select(getActualRoom);
    const login = yield select(getUserLogin);
    const body = yield call([JSON, JSON.stringify], {
        gameType,
        stepDto: {
            login,
            step: payload,
            time: Date.now(),
            id,
        },
    });
    yield call([stompClient, stompClient.send], routes.ws.actions.getPossibleStep, { uuid: id }, body);
}
export function* workerCheckerStep({ payload }) {
    payload = payload.toString();
    const possibleSteps = yield select(getPossibleSteps);
    const startIndex = possibleSteps[0].startIndex;
    const step = `${startIndex}_${payload}`;
    const { id, gameType } = yield select(getActualRoom);
    const userLogin = yield select(getUserLogin);
    yield call([stompClient, stompClient.send], routes.ws.actions.doStep, { uuid: id }, JSON.stringify({
       gameType, stepDto: { login: userLogin, step, time: Date.now(), id },
    }));
    yield put(putPossibleSteps([]));
    yield put(getStepOrder({ uuid: id, gameType }));
}
export function* workerExitGame() {
    const guestLogin = yield select(getUserLogin);
    const id = yield select(getActualRoomId);
    const body = yield call([JSON, JSON.stringify], { guestLogin, id });
    yield call([stompClient, stompClient.send], routes.ws.actions.leaveTheGame, { uuid: id }, body);
    yield call(workerCleanOldGame);
}

export function* watcherGame() {
    yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
    yield takeEvery(actionTypes.SUBSCRIBE_ROOM, workerSubscribeRoom);
    yield takeEvery(actionTypes.CREATE_ROOM, createRoomSaga);
    yield takeEvery(actionTypes.JOIN_ROOM, workerJoinRoom);
    yield takeEvery(actionTypes.GET_STEP_ORDER, workerGetStepOrder);
    yield takeEvery(actionTypes.DO_TIC_STEP, workerTicStep);
    yield takeEvery(actionTypes.CLEAN_OLD_GAME, workerCleanOldGame);
    yield takeEvery(actionTypes.PLAY_WITH_BOT, workerAddBot);
    yield takeEvery(actionTypes.ASK_BOT_STEP, workerAskBotStep);
    yield takeEvery(actionTypes.DO_BOT_STEP_TIC, workerDoBotStepTic);
    yield takeEvery(actionTypes.GAME_EVENT, workerGameEvent);
    yield takeEvery(actionTypes.DISCONNECT, workerDisconnect);
    yield takeEvery(actionTypes.GET_POSIBLE_STEP, workerGetPosibleStep);
    yield takeEvery(actionTypes.DO_CHECKER_STEP, workerCheckerStep);
    yield takeEvery(actionTypes.EXIT_GAME, workerExitGame);
}
