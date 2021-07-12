import React from 'react';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import Logo from '../Logo';
import '/src/i18n';
import 'react-i18next';

describe('Logo', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Logo />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render p', () => {
        const component = mountSmart(<Logo />);
        expect(component.find('img')).toHaveLength(1);
    });
    it('should render inputs', () => {
        const component = mountSmart(<Logo />);
        expect(component.find('h1')).toHaveLength(1);
    });
});
