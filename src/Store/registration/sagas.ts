import { takeEvery, call, select, put } from 'redux-saga/effects';
import { routes } from 'src/constants/routes';
//@ts-ignore
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { validation } from 'src/helpers/validation';
import { SagaIterator } from '@redux-saga/types';
import { postRequest } from 'src/helpers/requests';
import { actionTypes } from './actionTypes';
import { regValues } from './selectors';
import { setRegistrationValue, clearRegistrationInputs, reciveErrorRequest, reciveSuccessRequest } from './actions';
import { } from '../../helpers/types/requestTypes';

export function* workerRegistration(): SagaIterator {
    try {
        const data = yield select(regValues);
        const { message: validateMessage, isValid } = yield call(
            [validation, validation.registrationValidation], data);
        if (!isValid) {
            //@ts-ignore
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t(validateMessage), i18next.t('input_error'), 2000);
        }
        const answer = yield call(postRequest, routes.account.registration,
            { ...data, confirm: undefined });
        if (answer.status < 205) {
            yield (put(clearRegistrationInputs()));
            yield put(setRegistrationValue({ name: 'success', value: true }));
            yield put(reciveSuccessRequest());
        } else {
            yield put(setRegistrationValue({ name: 'success', value: false }));
            yield put(reciveErrorRequest());
            yield call([NotificationManager, NotificationManager.error],
                i18next.t('registartion_error'), i18next.t('reg_error'), 2000);
        }
    } catch (e) {
        yield put(setRegistrationValue({ name: 'success', value: false }));
        yield put(reciveErrorRequest());
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}

export function* watcherRegistration() {
    yield takeEvery(actionTypes.SEND_REGISTRATION_REQUEST, workerRegistration);
}
