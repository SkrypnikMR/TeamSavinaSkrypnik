import React from 'react';
import configureStore from 'redux-mock-store';
import MainPage from '../MainPage';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

const mockStore = configureStore();
const store = mockStore({
  game: {
    rooms: [],
    userLogin: 'login',
  },
}); 

describe('MainPage', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<MainPage />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StMainPage', () => {
        const component = mountSmart(<MainPage/>, store);
        expect(component.find('styled__StMainPage')).toHaveLength(1);
    });
    it('should render Header', () => {
        const component = mountSmart(<MainPage/>, store);
        expect(component.find('Header')).toHaveLength(1);
    });
    it('should render MainContent', () => {
        const component = mountSmart(<MainPage/>, store);
        expect(component.find('MainContent')).toHaveLength(1);
    });
        it('should render Footer', () => {
        const component = mountSmart(<MainPage/>, store);
        expect(component.find('Footer')).toHaveLength(1);
    });
});
