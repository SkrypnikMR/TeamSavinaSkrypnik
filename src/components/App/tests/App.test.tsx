import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';
import App from '../App';

jest.mock('../../../index', () => ({ store: { dispatch: jest.fn() } }));

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
  statistic: {
    fullStatistic: [],
  },
});

describe('App', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<App />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should render App', () => {
    const component = mountSmart(<App />, store);
    expect(component.html()).toMatchSnapshot();
  });
});
