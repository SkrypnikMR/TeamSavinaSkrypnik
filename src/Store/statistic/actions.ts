import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';

export const getFullStat = () => action(AT.GET_FULL_STAT);
export const putFullStatistic = (payload: any) => action(AT.PUT_FULL_STATISTIC, payload);
