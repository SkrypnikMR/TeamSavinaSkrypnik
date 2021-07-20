import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ModalCreateRoom from '../ModalCreateRoom';
import { act } from 'react-dom/test-utils';

const element = document.createElement('div');
element.setAttribute('id', 'modal');
element.setAttribute('data-testid', 'modal-test-id');

jest
    .spyOn(ReactDOM, 'createPortal')
    .mockImplementation((children, c, key) => {
        const symbol = Symbol.for('react.portal');
        return {
            $$typeof: symbol,
            key: key == null ? null : '' + key,
            children,
            containerInfo: element,
            implementation: null,
            type: symbol.description,
            props: null,
        } as ReactPortal;
    });

describe('ModalCreateRoom', () => {
    let props;
    beforeEach(() => {
    props = {
        handlecloseModal: jest.fn(),
        createRoom: jest.fn(),
    };
        });
    it('should render StModalCreateRoom', () => {
        const component = mount(<ModalCreateRoom {...props}/>);
        expect(component.find('styled__StModalCreateRoom')).toHaveLength(1);
    });
    it('should click on first button, then call createRoom and handlecloseModal', ()=>{
        const component = mount(<ModalCreateRoom {...props}/>);
        component.find('Button').at(0).props().onClick();
        expect(props.createRoom).toHaveBeenCalled();
        expect(props.handlecloseModal).toHaveBeenCalled();
    })
    it('should click on second button, then call only handleCloseModal', ()=>{
        const component = mount(<ModalCreateRoom {...props}/>);
        component.find('Button').at(1).props().onClick();
        expect(props.handlecloseModal).toHaveBeenCalled();
    })
    it('should trigger onChange', ()=>{
        const testValue = 'testvValue';
        const component = mount(<ModalCreateRoom {...props}/>);
        act(()=>{
            component.find('select').props().onChange({target: {value: testValue}});
        })
        component.update();
        expect(component.find('select').props().value).toBe(testValue);
    })
});
