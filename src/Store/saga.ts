import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';
import { watcherLogin } from './login/sagas';

const sagas = [
    watcherRegistration,
    watcherLogin,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}
