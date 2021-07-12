import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as sagas from '../sagas';
import { regValues } from '../selectors';
import { postRequest } from '/src/helpers/requests';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import {
    setRegistrationValue,
    clearRegistrationInputs,
    reciveErrorRequest,
    reciveSuccessRequest,
} from '../actions';
import { actionTypes } from '../actionTypes';
import { routes } from '/src/constants/routes';
import { validation } from '/src/helpers/validation';


describe('registrationSaga', () => {
    describe('workerRegistration', () => {
        let action;
        beforeEach(() => {
            action = {
                type: actionTypes.SEND_REGISTRATION_REQUEST,
            };
        });
        const authValue = {
            email: 'SkripnikMRW@gmail.com',
            password: '123456',
            firstName: 'Max',
            lastName: 'Skr',
            confirm: undefined,
        };
        const path = `${routes.account.registration}`;
        it('should call workerRegistration with validation Error', () => {
            testSaga(sagas.workerRegistration, action)
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
            testSaga(sagas.workerRegistration, action)
                .next()
                .select(regValues)
                .next(authValue)
                .call([validation, validation.registrationValidation], authValue)
                .next({ message: '', isValid: true })
                .call(postRequest, path, authValue)
                .next({ message: 'done' })
                .put(clearRegistrationInputs())
                .next()
                .put(setRegistrationValue({ name: 'success', value: true }))
                .next()
                .put(reciveSuccessRequest())
                .next()
                .isDone();
        });
        it('should call workerRegistration , serverAnswer !== done ', () => {
            testSaga(sagas.workerRegistration, action)
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
            testSaga(sagas.workerRegistration, action)
                .next()
                .throw()
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
                .takeEvery(actionTypes.SEND_REGISTRATION_REQUEST, sagas.workerRegistration)
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
