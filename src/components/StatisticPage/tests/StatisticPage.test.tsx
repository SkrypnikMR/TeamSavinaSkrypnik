import React from 'react';
import StatisticPage from '../StatisticPage';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';


describe('SingleRoom', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<StatisticPage />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleRoom', () => {
        const component = mountSmart(<StatisticPage/>);
        expect(component.find('styled__StStatisticPage')).toHaveLength(1);
    });
    it('should render Header', () => {
        const component = mountSmart(<StatisticPage/>);
        expect(component.find('Header')).toHaveLength(1);
    });
       it('should render Footer', () => {
        const component = mountSmart(<StatisticPage/>);
        expect(component.find('Footer')).toHaveLength(1);
    });
});
