import { actionTypes } from './actionTypes';

export const initialState = {
  notificationSettings: {
    type: 'notificationSettings',
    data: {},
    isOpen: false,
  },
  logOut: {
    type: 'logOut',
    data: {},
    isOpen: false,
  },
  allNotification: {
    type: 'allNotification',
    data: {},
    isOpen: false,
  },
  usersInChat: {
    type: 'usersInChat',
    data: {},
    isOpen: false,
  },
  createChat: {
    type: 'createChat',
    data: {},
    isOpen: false,
  },
};

export const reducer = (state = initialState, action) => {
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
