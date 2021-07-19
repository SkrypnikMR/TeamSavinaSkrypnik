import { createSelector } from 'reselect';
import { ApplicationState } from '../types';

export const registrationStore = (state: ApplicationState) => state.registration;
export const regValues = createSelector(
    registrationStore,
    ({ login, password, confirm }) => ({ login, password, confirm }),
);
