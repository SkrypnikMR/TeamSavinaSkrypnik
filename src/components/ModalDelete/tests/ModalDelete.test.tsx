import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalDelete from '../ModalDelete';

describe('ModalCreateRoom', () => {
    let props;
    let modal;
    beforeEach(() => {
        modal = document.createElement('div');
        modal.setAttribute('id', 'modal');
        document.body.append(modal);
    props = {
        handlecloseModal: jest.fn(),
        exitGame: jest.fn(),
    };
    });
    it('should snapshot', () => {
        const component = shallow(<ModalDelete {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StModalButtonBox', () => {
        const component = mount(<ModalDelete {...props}/>);
        expect(component.find('styled__StModalButtonBox')).toHaveLength(1);
    });
    it('should click on first button, then call exitGame and handlecloseModal', () => {
        const component = mount(<ModalDelete {...props}/>);
        component.find('Button').at(0).props().onClick();
        expect(props.exitGame).toHaveBeenCalled();
        expect(props.handlecloseModal).toHaveBeenCalled();
    });
});
