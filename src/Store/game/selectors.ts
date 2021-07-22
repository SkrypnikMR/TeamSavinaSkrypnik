import { createSelector } from 'reselect';
import { setStepHistory } from './actions';
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
    (store, id) => id,
    ({ stepHistory, userLogin }, id) => {
        const answer = stepHistory.find(step => Number(step.step) === id);
        if (!answer) return '';
        if (answer && answer.login === userLogin) return 'x';
        return 'o';
    },
);
