import { routes } from 'src/constants/routes';
import { takeEvery, call, take, put, select } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import { NotificationManager } from 'react-notifications';
import { eventChannel, SagaIterator } from 'redux-saga';
import i18next from 'i18next';
import { getUserLogin } from './selectors';
import { support } from '../../helpers/support';
import { actionTypes } from './actionTypes';
import { putRooms } from './actions';


let stompClient: CompatClient | null = null;

export const connection = (token: string) => {
    const socket = new WebSocket(`${routes.baseWebSocketUrl}${routes.ws.game_menu}`);
    stompClient = Stomp.over(socket);
    return new Promise(resolve => stompClient
         .connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
};
export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
    const roomsSub = stompClient.subscribe(routes.ws.subs.rooms, ({ body }) => emit(putRooms(JSON.parse(body))));
    const errorSub = stompClient.subscribe('/user/topic/errors', ({ body }) => console.log(body));
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
export function* workerJoinRoom({ payload }): SagaIterator {
    const userLogin = yield select(getUserLogin);
    const body = { guestLogin: userLogin, id: payload };
    stompClient.subscribe(`/topic/game/${payload}`, (message) => {
        console.log(message);
    });
    stompClient.send('/radioactive/join-room', {}, JSON.stringify(body));
}

export function* watcherGame() {
    yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
    yield takeEvery(actionTypes.JOIN_ROOM, workerJoinRoom);
}
