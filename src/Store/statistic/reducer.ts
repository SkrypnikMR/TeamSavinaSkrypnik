import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialStatistic } from './types';

export const initialState: TInitialStatistic = {
    fullStatistic: [],
};

const actionTypes1 = actions;
type TStatistic = typeof actionTypes1;
export type TActionStatistic = ActionType<TStatistic>;

export const reducer: Reducer<TInitialStatistic, TActionStatistic> = (state = initialState, action) => {
    switch (action.type) {
        case AT.PUT_FULL_STATISTIC:
            return { ...state, fullStatistic: action.payload };
        default: return { ...state };
    }
};
