import { createSelector } from 'reselect';

export const registrationStore = state => state.registration;
export const regValues = createSelector(
    registrationStore,
    ({ email, password, lastName, firstName, confirm }) => ({ email, password, lastName, firstName, confirm }),
);
