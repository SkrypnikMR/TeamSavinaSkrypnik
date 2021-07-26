import React from 'react';
import configureStore from 'redux-mock-store';
import MainPage from '../MainPage';
import { act } from 'react-dom/test-utils';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';
import { TMainPage } from '../types';

const mockStore = configureStore();
const store = mockStore({
  game: {
     rooms: [],
    userLogin: '',
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

describe('MainPage', () => {
    let props: TMainPage;
    beforeEach(() => {
        props = {
            getSockJSConnection: jest.fn(),
            disconnect: jest.fn()
        }
    })
    it('Should match snapshot', () => {
        const component = shallowSmart(<MainPage {...props}/>, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should call props.getSockJSConnection', () => {
        mountSmart(<MainPage {...props}/>, store);
        expect(props.getSockJSConnection).toHaveBeenCalled();
    });
    it('should render StMainPage', () => {
        const component = mountSmart(<MainPage {...props}/>, store);
        expect(component.find('styled__StMainPage')).toHaveLength(1);
    });
    it('should render Header', () => {
        const component = mountSmart(<MainPage {...props}/>, store);
        expect(component.find('Header')).toHaveLength(1);
    });
    it('should render MainContent', () => {
        const component = mountSmart(<MainPage {...props}/>, store);
        expect(component.find('MainContent')).toHaveLength(1);
    });
    it('should render Footer', () => {
        const component = mountSmart(<MainPage {...props}/>, store);
        expect(component.find('Footer')).toHaveLength(1);
    });
});
