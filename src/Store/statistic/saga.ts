import { NotificationManager } from 'react-notifications';
import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import i18next from 'i18next';
import { getUserLogin } from '../game/selectors';
import { postRequest } from '../../helpers/requests';
import { routes } from '../../constants/routes';
import { actionTypes as AT } from './actionTypes';
import { support } from '../../helpers/support';
import { putFullStatistic } from './actions';
import { THeaders } from '../../helpers/types/requestTypes';

export function* workerFullStatistic(): SagaIterator {
    try {
        const token: string = yield call([support, support.getTokenFromCookie], 'token');
        const username: string = yield select(getUserLogin);
        const authHeader: THeaders = { Authorization: token };
        const body = { username };
        const answer = yield call(postRequest, routes.statistic.byUserName, body, authHeader);
        if (answer.status < 400) {
            const parsedAnswer = yield call([answer, answer.json]);
            yield put(putFullStatistic(parsedAnswer));
        }
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}

export function* watcherStatistic() {
    yield takeEvery(AT.GET_FULL_STAT, workerFullStatistic);
}
