import React from 'react';
import MainContent from '../MainContent';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';


describe('MainContent', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<MainContent />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StRoomsContainer', () => {
        const component = mountSmart(<MainContent/>);
        expect(component.find('styled__StMainContent')).toHaveLength(1);
    });
    it('should render SingleRoom', () => {
        const component = mountSmart(<MainContent/>);
        expect(component.find('RoomsContainer')).toHaveLength(1);
    });
    it('should render AddRoom', () => {
        const component = mountSmart(<MainContent/>);
        expect(component.find('GameContent')).toHaveLength(1);
    });
});
