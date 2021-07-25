import * as actions from '../actions';
import { actionTypes } from '../actionTypes';

describe('statistic actions', () => {
    describe('actions.getFullStat', () => {
        it('toBe defined', () => {
            expect(actions.getFullStat).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.getFullStat).toBe('function');
        });
        it('should return value', () => {
            expect(actions.getFullStat()).toEqual({ type: actionTypes.GET_FULL_STAT });
        });
    });
    describe('actions.putFullStatistic', () => {
        it('toBe defined', () => {
            expect(actions.putFullStatistic).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.getFullStat).toBe('function');
        });
        it('should return value', () => {
            const payload = [];
            expect(actions.putFullStatistic(payload)).toEqual({ type: actionTypes.PUT_FULL_STATISTIC, payload });
        });
    });
});
