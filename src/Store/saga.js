import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';
import { watcherLogin } from './login/sagas';
import { watcherNewUserData } from './user/saga';

const sagas = [
    watcherRegistration,
    watcherLogin,
    watcherNewUserData,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}
