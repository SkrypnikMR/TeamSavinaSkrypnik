import { NotificationManager } from 'react-notifications';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { putFullStatistic } from '../actions';
import { routes } from '../../../constants/routes';
import { postRequest } from '../../../helpers/requests';
import { getUserLogin } from '../../game/selectors';
import { support } from '../../../helpers/support';
import * as sagas from '../saga';

jest.mock('../../../index', () => ({
    store: {},
}));

describe('registrationSaga', () => {
    describe('fork', () => {
        it('should fork watchers', () => {
            expectSaga(sagas.watcherStatistic)
                .put({ type: 'FORKED' })
                .run();
        });
    });
     describe('workerFullStatistic', () => {
         it('should call workerFullStatistic answer status < 400', () => {
             const token = '213213213123213';
             const username = 'asdasdasdas';
             const authHeader = { Authorization: token };
             const body = { username };
             const answer = { status: 200, json: jest.fn() };
             const parsedAnswer = [{ uuidGame: '123123123' }];
             testSaga(sagas.workerFullStatistic)
                 .next()
                 .call([support, support.getTokenFromCookie], 'token')
                 .next(token)
                 .select(getUserLogin)
                 .next(username)
                 .call(postRequest, routes.statistic.byUserName, body, authHeader)
                 .next(answer)
                 .call([answer, answer.json])
                 .next(parsedAnswer)
                 .put(putFullStatistic(parsedAnswer))
                 .next()
                 .isDone();
         });
        it('should call workerFullStatistic answer status !< 400', () => {
             const token = '213213213123213';
             const username = 'asdasdasdas';
             const authHeader = { Authorization: token };
             const body = { username };
             const answer = { status: 400, json: jest.fn() };
             testSaga(sagas.workerFullStatistic)
                 .next()
                 .call([support, support.getTokenFromCookie], 'token')
                 .next(token)
                 .select(getUserLogin)
                 .next(username)
                 .call(postRequest, routes.statistic.byUserName, body, authHeader)
                 .next(answer)
                 .isDone();
        });
        it('should error', () => {
            const error = new Error('error');
             testSaga(sagas.workerFullStatistic)
                 .next()
                 .throw(error)
                 .call([NotificationManager, NotificationManager.error],
                     undefined, undefined, 2000)
                 .next()
                 .isDone();
        });
    });
});
