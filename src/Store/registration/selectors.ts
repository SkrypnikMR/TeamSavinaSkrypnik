import { createSelector } from 'reselect';

export const registrationStore = state => state.registration;
export const regValues = createSelector(
    registrationStore,
    ({ login, password, confirm }) => ({ login, password, confirm }),
);
