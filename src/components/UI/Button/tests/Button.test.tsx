import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
import { IButton } from '../types';

describe('Button', () => {
    let props: IButton;
    beforeEach(() => {
        props = {
            id: 'id',
            onClick: jest.fn(),
            title: 'Button',
            name: 'name',
            type: 'button',
            value: 'value',
            isDisabled: false,
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Button {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StButton', () => {
        const component = shallow(<Button {...props}/>);
        expect(component.find('styled__StButton')).toHaveLength(1);
    });
    it('should call onClick', () => {
        const component = shallow(<Button {...props}/>);
        component.find('styled__StButton').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });
});
