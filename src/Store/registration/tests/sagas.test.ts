import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import * as sagas from '../sagas';
import { regValues } from '../selectors';
import { postRequest } from '../../../helpers/requests';
import {
    setRegistrationValue,
    clearRegistrationInputs,
    reciveErrorRequest,
    reciveSuccessRequest,
} from '../actions';
import { actionTypes as AT } from '../actionTypes';
import { routes } from '../../../constants/routes';
import { validation } from '../../../helpers/validation';

describe('registrationSaga', () => {
    describe('workerRegistration', () => {
        const error = new Error('error');
        const authValue = {
            login: 'kekShrek',
            password: 'kekShrek',
            confirm: undefined,
        };
        const path = `${routes.account.registration}`;
        it('should call workerRegistration with validation Error', () => {
            testSaga(sagas.workerRegistration)
                .next()
                .select(regValues)
                .next(authValue)
                .call([validation, validation.registrationValidation], authValue)
                .next({ message: 'input_error', isValid: false })
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('input_error'), i18next.t('input_error'), 2000,
                )
                .next()
                .isDone();
        });
        it('should call workerRegistration without error', () => {
            const authValueValidation = {
                login: 'kekShrek',
                password: 'kekShrek',
                confirm: 'kekShrek',
            };
            testSaga(sagas.workerRegistration)
                .next()
                .select(regValues)
                .next(authValueValidation)
                .call([validation, validation.registrationValidation], authValueValidation)
                .next({ message: '', isValid: true })
                .call(postRequest, routes.account.registration,
                    { ...authValueValidation, confirm: undefined })
                .next({ status: 200 })
                .put(clearRegistrationInputs())
                .next()
                .put(setRegistrationValue({ name: 'success', value: true }))
                .next()
                .put(reciveSuccessRequest())
                .next()
                .isDone();
        });
        it('should call workerRegistration , serverAnswer !== done ', () => {
            testSaga(sagas.workerRegistration)
                .next()
                .select(regValues)
                .next(authValue)
                .call([validation, validation.registrationValidation], authValue)
                .next({ message: '', isValid: true })
                .call(postRequest, path, authValue)
                .next({ message: 'such exists user' })
                .put(setRegistrationValue({ name: 'success', value: false }))
                .next()
                .put(reciveErrorRequest())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000,
                )
                .next()
                .isDone();
        });
        it('should call workerRegistration and we have error ', () => {
            testSaga(sagas.workerRegistration)
                .next()
                .throw(error)
                .put(setRegistrationValue({ name: 'success', value: false }))
                .next()
                .put(reciveErrorRequest())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
    });
    describe('watchers', () => {
        it('should run all watchers', () => {
            testSaga(sagas.watcherRegistration)
                .next()
                .takeEvery(AT.SEND_REGISTRATION_REQUEST, sagas.workerRegistration)
                .next()
                .isDone();
        });
    });
    describe('fork', () => {
        it('should fork watchers', () => {
            expectSaga(sagas.watcherRegistration)
                .put({ type: 'FORKED' })
                .run();
        });
    });
});
