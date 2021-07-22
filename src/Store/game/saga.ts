import { routes } from 'src/constants/routes';
import { takeEvery, call, take, put, select } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import { NotificationManager } from 'react-notifications';
import { eventChannel, SagaIterator } from 'redux-saga';
import i18next from 'i18next';
import { support } from '../../helpers/support';
import { actionTypes } from './actionTypes';
import { putRooms, setUserLogin, logOut } from './actions';
import { getUserLogin } from './selectors';

let stompClient: CompatClient | null = null;

export const connection = (token: string) => {
    const socket = new WebSocket(`${routes.baseWebSocketUrl}${routes.ws.game_menu}`);
    stompClient = Stomp.over(socket);
    return new Promise((resolve) => stompClient
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
        const token: string = yield call([support, support.getTokenFromCookie], 'token');
        const stompClient = yield call(connection, token);
        const stompChannel = yield call(createStompChannel, stompClient);
        yield call(init, stompClient);
        while (stompChannel) {
            const payload = yield take(stompChannel);
            yield put(payload);
        }
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* watcherGame() {
    yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
    yield takeEvery(actionTypes.CREATE_ROOM, createRoomSaga);
    // yield takeEvery(actionTypes.LOG_OUT, logOutSaga);
}

export function* createRoomSaga({ payload }): SagaIterator {
    const creatorLogin = yield select(getUserLogin);
    const body = {
        creatorLogin,
        gameType: payload,
        id: uuidv4(),
    };
    const token: string = yield call([support, support.getTokenFromCookie], 'token');
    yield call(
        [stompClient, stompClient.send], routes.ws.actions.createRoom, { Authorization: token }, JSON.stringify(body),
        );
    yield call([stompClient, stompClient.send], routes.ws.actions.getRooms, { Authorization: token });
}

export function* logOutSaga() {
    // yield put(setUserLogin({ }));
}
