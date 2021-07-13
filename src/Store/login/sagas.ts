import { takeEvery, call, select, put } from 'redux-saga/effects';
import { postRequest } from 'src/helpers/requests';
import { routes } from 'src/constants/routes';
import i18next from 'i18next';
import { NotificationManager } from 'react-notifications';
import { validation } from 'src/helpers/validation';
import { support } from 'src/helpers/support';
import { actionTypes } from './actionTypes';
import { logValues } from './selectors';
import { userNotifSettings } from '../user/selectors';
import { setLoginValue, clearLoginInputs, reciveErrorRequest, reciveSuccessRequest } from './actions';
import { setAuthValues, setValue } from '../user/actions';

export function* workerLogin() {
    try {
        const data = yield select(logValues);
        console.log(data);
        const { message: validateMessage, isValid } = yield call(validation.loginValidation, data);
        if (!isValid) {
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t(validateMessage), i18next.t('input_error'), 2000);
        }
        const answer = yield call(postRequest, routes.account.login, data);

        if (answer.status < 300) {
            yield (put(clearLoginInputs()));
            yield put(reciveSuccessRequest());
            yield put(setLoginValue({ name: 'success', value: true }));
        } else {
            yield put(setLoginValue({ name: 'success', value: false }));
            yield put(reciveErrorRequest());
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t(message), i18next.t('login_error'), 2000);
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
