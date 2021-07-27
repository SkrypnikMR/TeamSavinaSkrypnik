import React from 'react';
import { shallow, mount } from 'enzyme';
import Logo from '../Logo';

describe('Logo', () => {
    const props = {
        history: { push: jest.fn() },
    };
    it('Should match snapshot', () => {
        const component = shallow(<Logo {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render 2 btns', () => {
        const component = mount(<Logo {...props} />);
        expect(component.find('Button')).toHaveLength(2);
    });
    it('Should render img', () => {
        const component = mount(<Logo {...props} />);
        expect(component.find('img')).toHaveLength(1);
    });
    it('Should cal history push with /mainPage', () => {
        const component = mount(<Logo {...props} />);
        component.find('Button').at(0).props().onClick();
        expect(props.history.push).toHaveBeenCalledWith('/mainPage');
    });
    it('Should cal history push with /statistics', () => {
        const component = mount(<Logo {...props} />);
        component.find('Button').at(1).props().onClick();
        expect(props.history.push).toHaveBeenCalledWith('/statistics');
    });
});
