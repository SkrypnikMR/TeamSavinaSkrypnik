import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';
import { watcherLogin } from './login/sagas';
import { watcherGame } from './game/saga';
import { watcherStatistic } from './statistic/saga';

const sagas = [
    watcherRegistration,
    watcherLogin,
    watcherGame,
    watcherStatistic,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}
