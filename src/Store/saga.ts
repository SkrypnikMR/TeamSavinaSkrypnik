import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';
import { watcherLogin } from './login/sagas';
import { watcherGame } from './game/saga';

const sagas = [
    watcherRegistration,
    watcherLogin,
    watcherGame,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}
