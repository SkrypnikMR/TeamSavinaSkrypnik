import { createSelector } from 'reselect';
import { ApplicationState } from '../types';

export const loginStore = (store: ApplicationState) => store.login;
export const logValues = createSelector(
    loginStore,
    ({ login, password }) => ({ login, password }),
);
