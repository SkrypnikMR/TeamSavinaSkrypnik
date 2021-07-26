import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart } from '../../../../__tests__/testHelper';
import App from '../App';
import '/src/i18n';

jest.mock('react-modal');

const mockStore = configureStore();
const store = mockStore({
  registration: {
    email: '',
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
    success: null,
  },
  login: {
    email: '',
    password: '',
    confirm: '',
    firstName: '',
    lastName: '',
    success: null,
  },
  user: {
    themeMode: 'light',
  },
  modals: {
    notificationSettings: {
        type: 'notificationSettings',
        data: {},
        isOpen: true,
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
        type: 'usersInChat',
        data: {},
        isOpen: false,
    },
  },
});
const props = { 
  userTheme: {
    light: 'lightBackground',
    dark: 'darkBackground',
  },
  userThemeMode: 'dark',
};

describe('App', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<App {...props} />, store);
    expect(component.html()).toMatchSnapshot();
  });
});
