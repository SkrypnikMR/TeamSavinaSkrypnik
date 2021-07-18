import { routes } from 'src/constants/routes';
import { takeEvery, call, select, put } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { support } from '../../helpers/support';
import { actionTypes } from './actionTypes';


let stompClient: CompatClient | null = null;

 function connection(token: string) {
            const socket = new WebSocket(`${routes.baseWebSocketUrl}${routes.ws.game_menu}`);
           stompClient = Stomp.over(socket);
     stompClient.connect({ Authorization: `Bearer ${token}` }, (message) => {
        // you can subscribe here!
     });
     return stompClient;
}
function* workerConnection() {
    const token: string = yield call([support, support.getTokenFromCookie], 'token');
    stompClient = yield call(connection, token);
}

export function* watcherGame() {
    yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
}
