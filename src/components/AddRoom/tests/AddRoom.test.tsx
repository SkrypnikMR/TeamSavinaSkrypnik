import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { mountSmart } from '../../../../__tests__/testHelper';
import AddRoom from '../AddRoom';

const mockStore = configureStore();
const store = mockStore({
  game: {
    rooms: [],
  },
});

describe('AddRoom', () => {
    let modal: any;
    beforeEach(() => {
        modal = document.createElement('div');
        modal.setAttribute('id', 'portal');
        document.body.append(modal);
    });
    afterEach(() => document.body.removeChild(modal));

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
        component.find('styled__StAddRoom').simulate('click');
        expect(component.find('ModalCreateRoom')).toHaveLength(1);
    });
});
