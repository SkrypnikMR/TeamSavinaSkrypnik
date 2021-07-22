import React from 'react';
import RoomsContainer from '../RoomsContainer';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

describe('RoomsContainer', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<RoomsContainer />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StRoomsContainer', () => {
        const component = mountSmart(<RoomsContainer/>);
        expect(component.find('styled__StRoomsContainer')).toHaveLength(1);
    });
    it('should render SingleRoom', () => {
        const component = mountSmart(<RoomsContainer/>);
        expect(component.find('SingleRoom')).toHaveLength(3);
    });
    it('should render AddRoom', () => {
        const component = mountSmart(<RoomsContainer/>);
        expect(component.find('AddRoom')).toHaveLength(1);
    });
});
