import React from 'react';
import { shallow, mount } from 'enzyme';

import SingleSell from '../SingleSell';

describe('SingleSell', () => {
    it('Should match snapshot', () => {
        const component = shallow(<SingleSell />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StAddRoom', () => {
        const component = mount(<SingleSell/>);
        expect(component.find('styled__StSingleSell')).toHaveLength(1);
    });
    it('Should', () => {
        const component = mount(<SingleSell />);
        console.log(component.debug());
        component.find('styled__StSingleSell').simulate('click');
        expect(component.find('styled__StSingleSell')).toHaveLength(1);
    });
});
