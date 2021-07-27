import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

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
import ChessPlate from '../ChessPlate';

describe('ChessPlate', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<ChessPlate />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StAddRoom', () => {
        const component = mountSmart(<ChessPlate/>, store);
        expect(component.find('styled__StChessPlate')).toHaveLength(1);
    });
});
