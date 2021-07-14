import { actionTypes } from './actionTypes';
import { TModalState, TChangeModalVis } from './types/allModalsTypes';

export const initialState: TModalState = {
  gameAddition: {
    type: 'gameAddition',
    data: {},
    isOpen: false,
  },
};

export const reducer = (state: TModalState = initialState, action: TChangeModalVis) => {
  switch (action.type) {
    case actionTypes.CHANGE_MODAL_VISIBILITY: {
      const { isOpen, modalType, data } = action.payload;
      return {
        ...state,
        [modalType]: {
          ...state[modalType], data, isOpen,
        },
      };
    }
    default: return { ...state };
  }
};
