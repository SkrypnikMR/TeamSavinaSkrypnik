import React from 'react';
import Search from '../Search';
import { shallow } from 'enzyme';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import '/src/i18n';

describe('Search', () => {
    let props;
    const changeSearchValue = jest.fn();
    const searchValue = '';
    beforeEach(() => {
        props = {
          changeSearchValue,
          searchValue,
        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<Search />);
        expect(component.html).toMatchSnapshot();
    });
    it('should render inputs', () => {
        const component = mountSmart(<Search {...props} />);
        expect(component.find('Input')).toHaveLength(1);
    });
    it('Should render StSearch', () => {
      const component = shallow(<Search />);
      expect(component.find('styled__StSearch')).toHaveLength(1);
    });
});
