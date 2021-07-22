import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';

import { shallow, mount } from 'enzyme';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

import AddRoom from '../AddRoom';

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

const mockStore = configureStore();
const store = mockStore({
  game: {
    rooms: [],
    // userLogin: 'login',
  },
});

describe('AddRoom', () => {
    it('Should match snapshot', () => {
        const component = shallow(<AddRoom />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StAddRoom', () => {
        const component = mount(<AddRoom/>);
        expect(component.find('styled__StAddRoom')).toHaveLength(1);
    });
    it('Should', () => {
        const component = mountSmart(<AddRoom />, store);
        console.log(component.debug());
        component.find('styled__StAddRoom').simulate('click');
        expect(component.find('ModalCreateRoom')).toHaveLength(1);
    });
});
