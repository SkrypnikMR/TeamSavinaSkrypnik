import { routes } from 'src/constants/routes';
import { takeEvery, call, select, put } from 'redux-saga/effects';
import { Stomp } from '@stomp/stompjs';
import { support } from '../../helpers/support';
import { actionTypes } from './actionTypes';


let stompClient = null;

 function connection(token) {
            const socket = new WebSocket(`${routes.baseWebSocketUrl}${routes.ws.game_menu}`);
           stompClient = Stomp.over(socket);
     stompClient.connect({ Authorization: `Bearer ${token}` }, (message) => {
         stompClient.subscribe('user/topic/game/', (data) => {
             console.log(data);
         });
     });
     return stompClient;
}
function* workerConnection() {
    const token = yield call([support, support.getTokenFromCookie], 'token');
    stompClient = yield call(connection, token);
    console.log(stompClient);
}

export function* watcherGame() {
    yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
}
