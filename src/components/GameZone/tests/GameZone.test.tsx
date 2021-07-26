import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import GameZone from '../GameZone';
import { mountSmart } from '../../../../__tests__/testHelper';

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

describe('GameZone', () => {
    let portalFolder: any;
    beforeEach(() => {
        portalFolder = document.createElement('div');
        portalFolder.setAttribute('id', 'portal');
        document.body.append(portalFolder);
    });
    afterEach(() => {
        document.body.removeChild(portalFolder);
    });
    const props = {
        gameType: '',
    };
    it('Should match snapshot', () => {
        const component = shallow(<GameZone {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render Hello', () => {
        const component = mount(<GameZone {...props}/>);
        expect(component.find('Hello')).toHaveLength(1);
    });
    it('should render case Checkers', () => {
        props.gameType = 'Checkers';
        const component = mountSmart(<GameZone {...props} />, store);
        expect(component.find('styled__StGameZone')).toHaveLength(1);
        expect(component.find('Turn')).toHaveLength(1);
        expect(component.find('Button')).toHaveLength(1);
        expect(component.find('Chessplate')).toHaveLength(1);
    });
    it('should render delete Modal', () => {
        props.gameType = 'Checkers';
        const component = mountSmart(<GameZone {...props} />, store);
            act(() => component.find('Button').props().onClick());
            component.update();
            expect(component.find('ModalCustom')).toHaveLength(1);
    });
        it('should render case Tic-Tac-Toe', () => {
        props.gameType = 'Tic-tac-toe';
        const component = mountSmart(<GameZone {...props} />, store);
        expect(component.find('styled__StGameZone')).toHaveLength(1);
        expect(component.find('Turn')).toHaveLength(1);
        expect(component.find('TicTacToePlate')).toHaveLength(1);
    });
});
