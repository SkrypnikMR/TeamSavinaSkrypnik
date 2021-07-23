import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call, take, put, select } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import { NotificationManager } from 'react-notifications';
import { eventChannel } from 'redux-saga';
import i18next from 'i18next';
import { routes } from '../../constants/routes';
import { getUserLogin, getActualRoom } from './selectors';
import { support } from '../../helpers/support';
import { actionTypes } from './actionTypes';
import { putRooms, setActualRoom, getStepOrder, setStepHistory } from './actions';

let stompClient: CompatClient | null = null;

export const connection = (token: string) => {
    const socket = new WebSocket(`${routes.baseWebSocketUrl}${routes.ws.game_menu}`);
    stompClient = Stomp.over(socket);
    return new Promise(resolve => stompClient
         .connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
};
export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
    const roomsSub = stompClient.subscribe(routes.ws.subs.rooms, ({ body }) => emit(putRooms(JSON.parse(body))));
    const errorSub = stompClient.subscribe(routes.ws.subs.user_errors, support.errorCatcher);
    return () => {
        roomsSub.unsubscribe();
        errorSub.unsubscribe();
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
        const stringifyActualRoom = yield call([localStorage, localStorage.getItem], 'actualRoom');
        if (stringifyActualRoom) {
            const actualRoom = yield call([JSON, JSON.parse], stringifyActualRoom);
            yield call(workerSubscribeRoom, { payload: actualRoom.id });
            yield put(setActualRoom(actualRoom));
            yield put(getStepOrder({ gameType: actualRoom.gameType, uuid: actualRoom.id }));
        }
        yield call(init, stompClient);
        while (stompChannel) {
            const action = yield take(stompChannel);
            if (Array.isArray(action.payload)) {
                const userLogin = yield select(getUserLogin);
                const actualRoom = action.payload.find(el => el.creatorLogin === userLogin);
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
    const newUUID = uuidv4();
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
export function* workerDeleteRoom() {
    const { id } = yield select(getActualRoom);
    const guestLogin = yield select(getUserLogin);
    const body = { guestLogin, id };
    yield call([stompClient, stompClient.send], routes.ws.actions.deleteRoom, {}, JSON.stringify(body));
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
    yield call(workerGetStepOrder, { payload: { gameType, uuid: id } });
}
export function* workerCleanOldGame() {
    yield call([localStorage, localStorage.removeItem], 'actualRoom');
    yield call([localStorage, localStorage.removeItem], 'stepHistory');
    yield put(setStepHistory([]));
}

export function* watcherGame() {
    yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
    yield takeEvery(actionTypes.SUBSCRIBE_ROOM, workerSubscribeRoom);
    yield takeEvery(actionTypes.CREATE_ROOM, createRoomSaga);
    yield takeEvery(actionTypes.JOIN_ROOM, workerJoinRoom);
    yield takeEvery(actionTypes.DELETE_ROOM, workerDeleteRoom);
    yield takeEvery(actionTypes.GET_STEP_ORDER, workerGetStepOrder);
    yield takeEvery(actionTypes.DO_TIC_STEP, workerTicStep);
    yield takeEvery(actionTypes.CLEAN_OLD_GAME, workerCleanOldGame);
}
