import { createSelector } from 'reselect';
import { TInitialState } from './types/allTypes';
import { TStore } from '../allStoreTypes/types';

export const registrationStore = (state: TStore) : TInitialState => state.registration;
export const regValues = createSelector(
    registrationStore,
    ({ login, password, confirm }) => ({ login, password, confirm }),
);
