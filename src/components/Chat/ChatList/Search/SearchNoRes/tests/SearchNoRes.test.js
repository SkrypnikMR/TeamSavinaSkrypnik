import React from 'react';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import SearchNoRes from '../SearchNoRes';

describe('SearchNoRes', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<SearchNoRes />);
        expect(component.html).toMatchSnapshot();
    });
    it('Should render StNoResWrapper', () => {
        const component = mountSmart(<SearchNoRes />);
        expect(component.find('styled__StNoResWrapper')).toHaveLength(1);
    });
    it('Should render StNoResTitle', () => {
        const component = mountSmart(<SearchNoRes />);
        expect(component.find('styled__StNoResTitle')).toHaveLength(1);
    });
    it('Should render StNoResText', () => {
        const component = mountSmart(<SearchNoRes />);
        expect(component.find('styled__StNoResText')).toHaveLength(1);
    });
});
