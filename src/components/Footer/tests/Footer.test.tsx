import React from 'react';
import { shallow, mount } from 'enzyme';

import Footer from '../Footer';

describe('Footer', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Footer />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StFooter', () => {
        const component = mount(<Footer/>);
        expect(component.find('styled__StFooter')).toHaveLength(1);
    });
    it('should render a', () => {
        const component = mount(<Footer/>);
        expect(component.find('a')).toHaveLength(1);
    });
});
