import { takeEvery, call, select, put } from 'redux-saga/effects';
import SockJS from 'sockjs-client';
import { actionTypes } from './actionTypes';
 
let sockjs;

const connection = () => new SockJS('http://35.176.167.155:8089/game-menu');


function* workerConnection() {
    sockjs = yield call(connection);
    console.log(sockjs);
}

export function* watcherGame() {
    yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
}
