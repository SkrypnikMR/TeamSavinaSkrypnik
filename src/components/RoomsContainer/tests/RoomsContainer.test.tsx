import React from 'react';
import configureStore from 'redux-mock-store';
import RoomsContainer from '../RoomsContainer';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

const mockStore = configureStore();
const store = mockStore({
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

describe('RoomsContainer', () => {
    const props = { rooms: [], userLogin: 'MaximLoveTests' };
    it('Should match snapshot', () => {
        const component = shallowSmart(<RoomsContainer {...props}/>, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StRoomsContainer', () => {
        const component = mountSmart(<RoomsContainer {...props}/>, store);
        expect(component.find('styled__StRoomsContainer')).toHaveLength(1);
    });
    it('should render SingleRoom', () => {
        props.rooms = [{ id: 1, creatorLogin: 'testCreator', gameType: 'Checkers' }];
        const component = mountSmart(<RoomsContainer {...props}/>, store);
        expect(component.find('SingleRoom')).toHaveLength(1);
    });
    it('should render AddRoom', () => {
        const component = mountSmart(<RoomsContainer {...props}/>, store);
        expect(component.find('AddRoom')).toHaveLength(1);
    });
});
