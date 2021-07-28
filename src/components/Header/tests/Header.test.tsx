import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';
import Header from '../Header';

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
describe('Header', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Header />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render p', () => {
        const component = mountSmart(<Header />, store);
        expect(component.find('Logo')).toHaveLength(1);
    });
    it('should render inputs', () => {
        const component = mountSmart(<Header />, store);
        expect(component.find('HeaderControlPanel')).toHaveLength(1);
    });
});
