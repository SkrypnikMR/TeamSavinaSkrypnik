import React from 'react';
import { shallow, mount } from 'enzyme';

import GameZone from '../GameZone';

describe('GameZone', () => {
    it('Should match snapshot', () => {
        const component = shallow(<GameZone />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StGameZone', () => {
        const component = mount(<GameZone/>);
        expect(component.find('styled__StGameZone')).toHaveLength(1);
    });
    it('should render GameZone', () => {
        const component = mount(<GameZone/>);
        expect(component.find('Turn')).toHaveLength(1);
    });
});
