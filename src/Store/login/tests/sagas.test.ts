import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { routes } from '../../../constants/routes';
import * as sagas from '../sagas';
import { logValues } from '../selectors';
import { postRequest } from '../../../helpers/requests';
import * as actions from '../actions';
import { support } from '../../../helpers/support';
import { actionTypes } from '../actionTypes';
import { validation } from '../../../helpers/validation';


describe('loginSaga', () => {
    describe('workerLogin', () => {
        const error = new Error('error');
        it('should call workerLogin with noValid data', () => {
            const mocklogValues = { login: 'login', password: '123456' };
            const mockFalseValidation = { message: 'invalid', isValid: false };
            const validateMessage = mockFalseValidation.message;
            testSaga(sagas.workerLogin)
                .next()
                .select(logValues)
                .next(mocklogValues)
                .call([validation, validation.loginValidation], mocklogValues)
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
            testSaga(sagas.workerLogin)
                .next()
                .select(logValues)
                .next(mocklogValues)
                .call([validation, validation.loginValidation], mocklogValues)
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
            const token = 'somestringOfToken';
            const answer = { ok: true, text: jest.fn().mockReturnValue(token) };
            testSaga(sagas.workerLogin)
                .next()
                .select(logValues)
                .next(mocklogValues)
                .call([validation, validation.loginValidation], mocklogValues)
                .next(mockValidation)
                .call(postRequest, routes.account.login, mocklogValues)
                .next(answer)
                .put(actions.clearLoginInputs())
                .next()
                .put(actions.reciveSuccessRequest())
                .next()
                .call([answer, answer.text])
                .next(token)
                .call([support, support.setTokenInCookie], token)
                .next()
                .put(actions.setLoginValue({ name: 'success', value: true }))
                .next()
                .isDone();
        });
        it('should call workerLogin and error ', () => {
            testSaga(sagas.workerLogin)
                .next()
                .throw(error)
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
