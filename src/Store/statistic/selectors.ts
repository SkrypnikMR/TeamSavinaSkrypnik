import { createSelector } from 'reselect';
import { ApplicationState } from '../types';

export const statisticStore = (store: ApplicationState) => store.statistic;
export const fullStatSelector = createSelector(
    statisticStore,
    ({ fullStatistic }) => fullStatistic,
);
