import React from 'react';
import MainPage from '../MainPage';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';


describe('RoomsContainer', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<MainPage />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StMainPage', () => {
        const component = mountSmart(<MainPage/>);
        expect(component.find('styled__StMainPage')).toHaveLength(1);
    });
    it('should render Header', () => {
        const component = mountSmart(<MainPage/>);
        expect(component.find('Header')).toHaveLength(1);
    });
    it('should render MainContent', () => {
        const component = mountSmart(<MainPage/>);
        expect(component.find('MainContent')).toHaveLength(1);
    });
        it('should render Footer', () => {
        const component = mountSmart(<MainPage/>);
        expect(component.find('Footer')).toHaveLength(1);
    });
});
