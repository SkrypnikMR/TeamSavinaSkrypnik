import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ModalCreateRoom from '../ModalCreateRoom';

describe('ModalCreateRoom', () => {
    let props;
    let modal;
    beforeEach(() => {
        modal = document.createElement('div');
        modal.setAttribute('id', 'modal');
        document.body.append(modal);
    props = {
        handlecloseModal: jest.fn(),
        createRoom: jest.fn(),
    };
    });
    it('should snapshot', () => {
        const component = shallow(<ModalCreateRoom {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StModalButtonBox', () => {
        const component = mount(<ModalCreateRoom {...props}/>);
        expect(component.find('styled__StModalButtonBox')).toHaveLength(1);
    });
    it('should click on first button, then call createRoom and handlecloseModal', () => {
        const component = mount(<ModalCreateRoom {...props}/>);
        component.find('Button').at(0).props().onClick();
        expect(props.createRoom).toHaveBeenCalled();
        expect(props.handlecloseModal).toHaveBeenCalled();
    });
    it('should click on second button, then call only handleCloseModal', () => {
        const component = mount(<ModalCreateRoom {...props}/>);
        component.find('Button').at(1).props().onClick();
        expect(props.handlecloseModal).toHaveBeenCalled();
    });
    it('should trigger onChange', () => {
        const testValue = 'testvValue';
        const component = mount(<ModalCreateRoom {...props}/>);
        act(() => {
            component.find('select').props().onChange({ target: { value: testValue } });
        });
        component.update();
        expect(component.find('select').props().value).toBe(testValue);
    });
});
