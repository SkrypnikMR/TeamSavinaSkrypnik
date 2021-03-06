import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call, select, put } from 'redux-saga/effects';
import { postRequest } from 'src/helpers/requests';
import { routes } from 'src/constants/routes';
import i18next from 'i18next';
import { NotificationManager } from 'react-notifications';
import { validation } from 'src/helpers/validation';
import { actionTypes } from './actionTypes';
import { logValues } from './selectors';
import { support } from '../../helpers/support';
import { setLoginValue, clearLoginInputs, reciveErrorRequest, reciveSuccessRequest } from './actions';
import { setUserLogin } from '../game/actions';

export function* workerLogin() : SagaIterator {
    try {
        const data = yield select(logValues);
        const { message: validateMessage, isValid } = yield call([validation, validation.loginValidation], data);
        if (!isValid) {
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t(validateMessage), i18next.t('input_error'), 2000);
        }
        const answer = yield call(postRequest, routes.account.login, data);
        if (answer.ok) {    
            yield (put(clearLoginInputs()));
            yield put(reciveSuccessRequest());
            const token = yield call([answer, answer.text]);
            yield call([support, support.setTokenInCookie], token);
            yield call([localStorage, localStorage.setItem], 'login', data.login);
            yield put(setUserLogin(data.login));
            yield put(setLoginValue({ name: 'success', value: true }));
        } else {
            yield put(setLoginValue({ name: 'success', value: false }));
            yield put(reciveErrorRequest());
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t('wrong_user_or_password'), i18next.t('login_error'), 2000);
        }
    } catch (e) {
        yield put(setLoginValue({ name: 'success', value: false }));
        yield put(reciveErrorRequest());
        return yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}

export function* watcherLogin() {
    yield takeEvery(actionTypes.SEND_LOGIN_REQUEST, workerLogin);
}
