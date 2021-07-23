import { createSelector } from 'reselect';
import { ApplicationState } from '../types';

export const gameStore = (store: ApplicationState) => store.game;

export const getRooms = createSelector(
    gameStore,
    ({ rooms }) => rooms,
);

export const getUserLogin = createSelector(
    gameStore,
    ({ userLogin }) => userLogin,
);

export const getCheckerDesk = createSelector(
    gameStore,
    (checker) => checker,
);

export const getCurrentChecker = createSelector(
    gameStore,
    (currentChecker) => currentChecker,
);
