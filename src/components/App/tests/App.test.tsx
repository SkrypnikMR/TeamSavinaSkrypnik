import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart } from '../../../../__tests__/testHelper';
import App from '../App';
import '/src/i18n';

jest.mock('react-modal');

const mockStore = configureStore();
const store = mockStore({
  registration: {
    login: '',
    password: '',
    confirm: '',
    success: null,
  },
  login: {
    login: '',
    password: '',
    success: null,
  },
  user: {
    themeMode: 'light',
  },
  game: {
     rooms: [],
    userLogin: localStorage.getItem('login') || '',
    actualRoom: {
      gameType: '',
      creatorLogin: '',
      guestLogin: '',
      startTime: 0,
      id: '',
      stepDoList: [],
    },
    stepOrder: '',
    stepHistory: [],
    winner: '',
    possibleSteps: [],
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
