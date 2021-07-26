import { expectSaga, testSaga } from 'redux-saga-test-plan';
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
});
