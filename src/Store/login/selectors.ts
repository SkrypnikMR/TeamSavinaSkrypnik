import { createSelector } from 'reselect';
import { TStore } from '../allStoreTypes/types';

export const loginStore = (store: TStore) => store.login;
export const logValues = createSelector(
    loginStore,
    ({ login, password }) => ({ login, password }),
);
