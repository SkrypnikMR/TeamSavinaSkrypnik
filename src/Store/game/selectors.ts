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

export const getStepOrder = createSelector(
    gameStore,
    ({ stepOrder }) => stepOrder,
);

export const getTicStatus = createSelector(
    gameStore,
    (store, id: number) => id,
    ({ stepHistory }, id) => stepHistory[id],
);

export const getWinner = createSelector(
    gameStore,
    ({ winner }) => winner,
);
