import { createSelector } from 'reselect';

export const loginStore = state => state.login;
export const logValues = createSelector(
    loginStore,
    ({ email, password }) => ({ email, password }),
);
