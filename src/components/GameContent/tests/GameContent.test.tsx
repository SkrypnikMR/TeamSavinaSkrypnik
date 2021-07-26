import React from 'react';
import { shallow, mount } from 'enzyme';

import GameContent from '../GameContent';

describe('GameContent', () => {
    it('Should match snapshot', () => {
        const component = shallow(<GameContent />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StGameContent', () => {
        const component = mount(<GameContent/>);
        expect(component.find('styled__StGameContent')).toHaveLength(1);
    });
    it('should render GameZone', () => {
        const component = mount(<GameContent/>);
        expect(component.find('GameZone')).toHaveLength(1);
    });
});
