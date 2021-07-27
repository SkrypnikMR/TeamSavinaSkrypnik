import React from 'react';
import { shallow, mount } from 'enzyme';
import { useTranslation } from 'react-i18next';
import HeaderControlPanel from '../HeaderControlPanel';
import { APP_ROUTES } from '../../../../constants/reactRoutes';

jest.mock('react-i18next', () => ({ useTranslation: jest.fn().mockReturnValue({ i18n: { changeLanguage: jest.fn() }, t: jest.fn() }) }));

describe('HeaderControlPanel', () => {
    let props: any;
    const realLocalStorageClear = localStorage.clear;
    beforeEach(() => {
        props = { history: { push: jest.fn() } };
        localStorage.clear = jest.fn();
    });
    afterEach(() => {
        localStorage.clear = realLocalStorageClear;
    });

    it('Should match snapshot', () => {
        const component = shallow(<HeaderControlPanel {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render 3button and 1 img', () => {
        const component = mount(<HeaderControlPanel {...props} />);
        expect(component.find('button')).toHaveLength(3);
        expect(component.find('img')).toHaveLength(1);
    });
    it('Should call useTheme', () => {
        const component = mount(<HeaderControlPanel {...props} />);
        component.find('button').at(0).simulate('click');
    });
    it('Should call i18n.changeLanguage with en', () => {
        const { i18n } = useTranslation();
        const component = mount(<HeaderControlPanel {...props} />);
        component.find('button').at(1).simulate('click');
        expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
    });
    it('Should call i18n.changeLanguage with ru', () => {
        const { i18n } = useTranslation();
        const component = mount(<HeaderControlPanel {...props} />);
        component.find('button').at(1).simulate('click');
        expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
    });
    it('Should call history.push and localStorage.clear', () => {
        const component = mount(<HeaderControlPanel {...props} />);
        component.find('img').simulate('click');
        expect(props.history.push).toHaveBeenCalledWith(APP_ROUTES.login);
    });
});
