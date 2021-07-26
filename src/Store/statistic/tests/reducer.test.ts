import { reducer, initialState } from '../reducer';
import * as actions from '../actions';

describe('statisticReducer', () => {
    it('PUT_FULL_STATISTIC', () => {
        const fullStatistic = [];
        expect(reducer(initialState,
            actions.putFullStatistic(fullStatistic)))
            .toEqual({ ...initialState, fullStatistic });
    });
});
