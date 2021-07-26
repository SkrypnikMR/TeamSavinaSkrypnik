import React from 'react';
import configureStore from 'redux-mock-store';
import StatisticPage from '../StatisticPage';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

const mockStore = configureStore();
const store = mockStore({
  game: {
    rooms: [],
    // userLogin: 'login',
  },
});

describe('StatisticPage', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<StatisticPage />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleRoom', () => {
        const component = mountSmart(<StatisticPage/>, store);
        expect(component.find('styled__StStatisticPage')).toHaveLength(1);
    });
    it('should render Header', () => {
        const component = mountSmart(<StatisticPage/>, store);
        expect(component.find('Header')).toHaveLength(1);
    });
       it('should render Footer', () => {
        const component = mountSmart(<StatisticPage/>, store);
        expect(component.find('Footer')).toHaveLength(1);
    });
});
