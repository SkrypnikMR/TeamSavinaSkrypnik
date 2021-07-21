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

export const getActualRoom = createSelector(
    gameStore,
    ({ actualRoom }) => actualRoom,
);

export const getActualRoomGameType = createSelector(
    getActualRoom,
    ({ gameType }) => gameType,
);
