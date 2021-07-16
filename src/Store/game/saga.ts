import { takeEvery, call, select, put } from 'redux-saga/effects';
import SockJS from 'sockjs-client';
import { actionTypes } from './actionTypes';
import { routes } from '../../constants/routes';
 
let sockjs;

const connection = () => new SockJS(routes.webSocketUrl);


function* workerConnection() {
    sockjs = yield call(connection);
    console.log(sockjs);
}

export function* watcherGame() {
    yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
}
