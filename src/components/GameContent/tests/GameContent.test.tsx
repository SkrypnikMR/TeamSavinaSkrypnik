import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';
import GameContent from '../GameContent';
import { TGameContent } from '../types';

jest.useFakeTimers();

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

describe('GameContent', () => {
    let props: TGameContent;
    beforeEach(() => {
        props = {
            winner: '',
            cleanOldGame: jest.fn(),
        };
    });

    it('Should match snapshot', () => {
        const component = shallowSmart(<GameContent {...props}/>, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StGameContent', () => {
        const component = mountSmart(<GameContent {...props}/>, store);
        expect(component.find('styled__StGameContent')).toHaveLength(1);
    });
    it('should render GameZone', () => {
        const component = mountSmart(<GameContent {...props}/>, store);
        expect(component.find('GameZone')).toHaveLength(1);
    });
    it('should render Winner', () => {
        props.winner = 'MaximWinner';
        const component = mountSmart(<GameContent {...props} />, store);
        jest.advanceTimersByTime(1000);
        expect(component.find('Winner')).toHaveLength(1);
        expect(props.cleanOldGame).toHaveBeenCalled();
    });
});
