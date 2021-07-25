import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TFullStat } from './types';

export const getFullStat = () => action(AT.GET_FULL_STAT);
export const putFullStatistic = (payload: TFullStat) => action(AT.PUT_FULL_STATISTIC, payload);
