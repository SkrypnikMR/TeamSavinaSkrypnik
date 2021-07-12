import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import Header from '../Header';

const mockStore = configureStore();
const store = mockStore({
  user: {
    themeMode: 'light',
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
