import { actionTypes } from './actionTypes';
import { backgroundUrls } from '../../components/UI/baseLayout';
import { support } from '../../helpers/support';

export const initialState = {
  theme: backgroundUrls,
  themeMode: support.getSessionStorageItem('themeMode') || 'light',
  token: support.getSessionStorageItem('token') || null,
  userInfo: support.getSessionStorageItem('userInfo') || {
    email: '',
    firstName: '',
    lastName: '',
    id: 0,
    age: 0,
    hobby: '',
    company: '',
    city: '',
  },
  init: false,
  settings: support.getSessionStorageItem('settings') || { notifications: true },
  changeUser: support.getSessionStorageItem('userInfo') || null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VALUE:
      return { ...state, [action.payload.name]: action.payload.value };
    case actionTypes.CHANGE_USER_DATA:
      return { ...state, changeUser: { ...state.changeUser, [action.payload.name]: action.payload.value } };
    case actionTypes.SET_AUTH_VALUES:
      return {
        ...state,
        token: action.payload.token,
        userInfo: action.payload.userInfo,
        changeUser: action.payload.userInfo,
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, userInfo: { ...state.userInfo, [action.payload.name]: action.payload.value } };
    default: return { ...state };
  }
};
