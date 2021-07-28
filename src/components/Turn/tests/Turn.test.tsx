import React from 'react';
import { shallow, mount } from 'enzyme';
import Turn from '../Turn';

describe('Turn', () => {
    const props = {
            turn: 'login1',
            login: 'login2',
          };
    it('Should match snapshot', () => {
        const component = shallow(<Turn />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should turn prop !== login', () => {
        const component = mount(<Turn {...props} />);
        expect(component.find('p').text()).toBe('not_your_turn');
    });
});
