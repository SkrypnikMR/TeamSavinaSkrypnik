import React from 'react';
import { shallow, mount } from 'enzyme';
import { TWinner } from '../types';
import Winner from '../Winner';

describe('Winner', () => {
    let props: TWinner;
    beforeEach(() => {
        props = {
            winner: 'Ya',
            userLogin: 'neYa',
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Winner {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render StWinnerWrapper', () => {
        props = {
            winner: 'Ya',
            userLogin: 'Ya',
        };
        const component = mount(<Winner {...props} />);
        expect(component.find('styled__StWinnerWrapper')).toHaveLength(1);
    });
});
