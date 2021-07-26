import React from 'react';
import configureStore from 'redux-mock-store';
import MainContent from '../MainContent';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

const mockStore = configureStore();
const store = mockStore({
  game: {
    rooms: [],
    // userLogin: 'login',
  },
});

describe('MainContent', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<MainContent />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StRoomsContainer', () => {
        const component = mountSmart(<MainContent/>, store);
        expect(component.find('styled__StMainContent')).toHaveLength(1);
    });
    it('should render SingleRoom', () => {
        const component = mountSmart(<MainContent/>, store);
        expect(component.find('RoomsContainer')).toHaveLength(1);
    });
    it('should render AddRoom', () => {
        const component = mountSmart(<MainContent/>, store);
        expect(component.find('GameContent')).toHaveLength(1);
    });
});
