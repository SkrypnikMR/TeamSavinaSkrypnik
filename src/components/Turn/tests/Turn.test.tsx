import React from 'react';
import { mount } from 'enzyme';
import Turn from '../Turn';
import { shallowSmart } from '../../../../__tests__/testHelper';

describe('Turn', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Turn />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should turn prop !== login', () => {
        const props = {
            turn: 'login1',
            login: 'login2',
        };
        const component = mount(<Turn {...props} />);
        expect(component.find('p').text()).toBe('not_your_turn');
    });
});
