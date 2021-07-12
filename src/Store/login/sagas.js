import { takeEvery, call, select, put } from 'redux-saga/effects';
import { postRequest } from '/src/helpers/requests';
import { routes } from '/src/constants/routes';
import i18next from 'i18next';
import { NotificationManager } from 'react-notifications';
import { actionTypes } from './actionTypes';
import { logValues } from './selectors';
import { userNotifSettings } from '../user/selectors';
import { validation } from '/src/helpers/validation';
import { setLoginValue, clearLoginInputs, reciveErrorRequest, reciveSuccessRequest } from './actions';
import { support } from '/src/helpers/support';
import { setAuthValues, setValue } from '../user/actions';
import { init } from '../chat/actions';

export function* workerLogin() {
    try {
        const data = yield select(logValues);
        const { message: validateMessage, isValid } = yield call(validation.loginValidation, data);
        if (!isValid) {
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t(validateMessage), i18next.t('input_error'), 2000);
        }
        const { token, message, userInfo } = yield call(postRequest, routes.account.login, data);
        if (token) {
            yield (put(clearLoginInputs()));
            yield put(reciveSuccessRequest());
            yield call([support, support.setSessionStorageItem], 'token', token);
            yield call([support, support.setSessionStorageItem], 'userInfo', userInfo);
            yield put(setAuthValues({ token, userInfo }));
            yield put(setValue({ name: 'init', value: true }));
            yield put(setLoginValue({ name: 'success', value: true }));
            yield put(init());
            const notif = yield select(userNotifSettings);
            if (notif) yield call([support, support.playAudio], './public/assets/music/welcome.mp3');
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
