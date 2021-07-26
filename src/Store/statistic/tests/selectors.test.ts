import * as selectors from '../selectors';

describe('statistic selectors', () => {
    let state : any;
    beforeEach(() => {
        state = {
            statistic: {
                fullStatistic: [],
            },
        };
    });
    describe('selectors.statisticStore', () => {
        it('toBe defined', () => {
            expect(selectors.statisticStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.statisticStore).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.statisticStore(state)).toEqual(state.statistic);
        });
    });
    describe('selectors.fullStatSelector', () => {
        it('toBe defined', () => {
            expect(selectors.fullStatSelector).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.fullStatSelector).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.fullStatSelector(state)).toEqual(state.statistic.fullStatistic);
        });
    });
});
