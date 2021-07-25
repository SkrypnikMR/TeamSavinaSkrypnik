import { createSelector } from 'reselect';
import i18next from 'i18next';
import { DRAW } from '../../constants/simpleConstants';
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

export const getStepOrderSelector = createSelector(
    gameStore,
    ({ stepOrder }) => stepOrder,
);

export const getTicStatus = createSelector(
    gameStore,
    (_store, id: number) => id,
    ({ stepHistory }, id) => stepHistory[id],
);
export const getPossibleStepPosition = createSelector(
    gameStore,
    (_store, id: number) => id,
    ({ possibleSteps }, id) => {
        const position = possibleSteps.find(el => el.stepIndex === id);
        if (position) return true;
        return null;
    },
);

export const getWinner = createSelector(
    gameStore,
    ({ winner, userLogin }) => {
        switch (winner) {
            case userLogin: return i18next.t('winner');
            case DRAW: return i18next.t(DRAW);
            default: {
                if (winner === '') return '';
                if (winner !== userLogin) return i18next.t('loser');
            }
        }
    },
);
