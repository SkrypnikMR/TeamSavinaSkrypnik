import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { routes } from 'src/constants/routes';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import * as sagas from '../sagas';
import { logValues } from '../selectors';
import { postRequest } from 'src/helpers/requests';
import * as actions from '../actions';
import { setAuthValues } from '../../user/actions';
import { support } from '/src/helpers/support';
import { actionTypes } from '../actionTypes';
import { validation } from '/src/helpers/validation';


describe('loginSaga', () => {
    describe('workerLogin', () => {
        let action;
        beforeEach(() => {
            action = {
                type: actionTypes.SEND_LOGIN_REQUEST,
            };
        });
        it('should call workerLogin with noValid data', () => {
            const mocklogValues = { login: 'login', password: '123456' };
            const mockFalseValidation = { message: 'invalid', isValid: false };
            const validateMessage = mockFalseValidation.message;
            testSaga(sagas.workerLogin, action)
                .next()
                .select(logValues)
                .next(mocklogValues)
                .call(validation.loginValidation, mocklogValues)
                .next(mockFalseValidation)
                .call([NotificationManager, NotificationManager.error],
                    i18next.t(validateMessage), i18next.t('input_error'), 2000)
                .next()
                .isDone();
        });
        it('should call workerLogin with Valid data but not valid on server', () => {
            const mocklogValues = { login: 'login', password: '123456' };
            const mockValidation = { message: '', isValid: true };
            const invalidAcc = { message: 'not valid acc' };
            const { message } = invalidAcc;
            testSaga(sagas.workerLogin, action)
                .next()
                .select(logValues)
                .next(mocklogValues)
                .call(validation.loginValidation, mocklogValues)
                .next(mockValidation)
                .call(postRequest, routes.account.login, mocklogValues)
                .next(invalidAcc)
                .put(actions.setLoginValue({ name: 'success', value: false }))
                .next()
                .put(actions.reciveErrorRequest())
                .next()
                .call([NotificationManager, NotificationManager.error], i18next.t(message), i18next.t('login_error'), 2000)
                .next()
                .isDone();
        });
        it('should call workerLogin with Valid data and success request', () => {
            const mocklogValues = { login: 'login', password: '123456' };
            const mockValidation = { message: '', isValid: true };
            const mockServerAnswer = {
                token: 'someToken',
                message: 'yep',
                userInfo: {
                    email: 'Smartick@qip.ru',
                    firstName: 'Egor',
                    lastName: 'Letov',
                },
            };
            const { token, userInfo } = mockServerAnswer;
            testSaga(sagas.workerLogin, action)
                .next()
                .select(logValues)
                .next(mocklogValues)
                .call(validation.loginValidation, mocklogValues)
                .next(mockValidation)
                .call(postRequest, routes.account.login, mocklogValues)
                .next(mockServerAnswer)
                .put(actions.clearLoginInputs())
                .next()
                .put(actions.reciveSuccessRequest())
                .next()
                .call([support, support.setSessionStorageItem], 'token', token)
                .next()
                .call([support, support.setSessionStorageItem], 'userInfo', userInfo)
                .next()
                .put(setAuthValues({ token, userInfo }))
                .next()
                .put(actions.setLoginValue({ name: 'success', value: true }))
                .next()
                .isDone();
        });
        it('should call workerLogin and error ', () => {
            testSaga(sagas.workerLogin, action)
                .next()
                .throw()
                .put(actions.setLoginValue({ name: 'success', value: false }))
                .next()
                .put(actions.reciveErrorRequest())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000);
        });
    });
    describe('watchers', () => {
        it('should run all watchers', () => {
            testSaga(sagas.watcherLogin)
                .next()
                .takeEvery(actionTypes.SEND_LOGIN_REQUEST, sagas.workerLogin)
                .next()
                .isDone();
        });
    });
    describe('fork', () => {
        it('should fork watchers', () => {
            expectSaga(sagas.watcherLogin)
                .put({ type: 'FORKED' })
                .run();
        });
    });
});
