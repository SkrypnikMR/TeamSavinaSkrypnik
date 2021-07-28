import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalLogout from '../ModalLogout';
import { APP_ROUTES } from '../../../constants/reactRoutes';

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
        history: { push: jest.fn() },
    };
    });
    it('should snapshot', () => {
        const component = shallow(<ModalLogout {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StModalButtonBox', () => {
        const component = mount(<ModalLogout {...props}/>);
        expect(component.find('styled__StModalButtonBox')).toHaveLength(1);
    });
    it('should click on first button, then call exitGame and handlecloseModal', () => {
        const component = mount(<ModalLogout {...props}/>);
        component.find('Button').at(0).props().onClick();
        expect(props.exitGame).toHaveBeenCalled();
        expect(props.handlecloseModal).toHaveBeenCalled();
        expect(props.history.push).toHaveBeenCalledWith(APP_ROUTES.login);
    });
});
