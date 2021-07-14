import React from 'react';
import SingleRoom from '../SingleRoom';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';


describe('SingleRoom', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<SingleRoom />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleRoom', () => {
        const component = mountSmart(<SingleRoom/>);
        expect(component.find('styled__StSingleRoom')).toHaveLength(1);
    });
    it('should render Button', () => {
        const component = mountSmart(<SingleRoom/>);
        expect(component.find('Button')).toHaveLength(1);
    });
});
