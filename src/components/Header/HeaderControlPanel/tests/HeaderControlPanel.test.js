import React from 'react';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import { useTranslation } from 'react-i18next';
import HeaderControlPanel from '../HeaderControlPanel';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn()
        .mockReturnValue({ i18n: { changeLanguage: jest.fn() }, t: jest.fn() }),
}));

describe('HeaderControlPanel', () => {
    let props;
    beforeEach(() => {
        props = {
            setValue: jest.fn(),
            themeMode: '',
            history: [],
            location: { pathname: '/' },
      };
    });
    const { i18n } = useTranslation();
    it('Should match snapshot', () => {         
        const component = shallowSmart(<HeaderControlPanel {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should call i18n.changeLanguage ', () => {
        const component = mountSmart(<HeaderControlPanel {...props}/>);
        component.find('Button').at(2).getElement().props.onClick({ target: { value: 'light' } });
        expect(i18n.changeLanguage).toHaveBeenCalled();
    });
    it('should call button for change theme, themeMode===dark', () => {
        props = {
            setValue: jest.fn(),
            themeMode: 'dark',
            history: [],
            location: { pathname: '/' },
        };
        const component = mountSmart(<HeaderControlPanel {...props}/>);
        component.find('Button').at(0).simulate('click', { target: { value: 'light' } });
        expect(props.setValue).toHaveBeenCalledWith({ name: 'themeMode', value: 'light' });
    });
    it('should call button for change theme, themeMode===light', () => {
        props = {
            setValue: jest.fn(),
            themeMode: 'light',
            history: [],
            location: { pathname: '/' },
        };
        const component = mountSmart(<HeaderControlPanel {...props}/>);
        component.find('Button').at(0).simulate('click', { target: { value: 'dark' } });
        expect(props.setValue).toHaveBeenCalledWith({ name: 'themeMode', value: 'dark' });
    });
    it('should render all buttons in /chat', () => {
        const props = {
            history: [],
            location: { pathname: '/chat' },
            setValue: jest.fn(),
            themeMode: 'light',
        };
        const component = mountSmart(<HeaderControlPanel {...props} />);
        expect(component.find('button')).toHaveLength(5);
    });
    it('should render all buttons in /account', () => {
        const props = {
            history: [],
            location: { pathname: '/account' },
            setValue: jest.fn(),
            themeMode: 'light',
        };
        const component = mountSmart(<HeaderControlPanel {...props} />);
        expect(component.find('button')).toHaveLength(4);
    });
    it('should call history push', () => {
        const props = {
            history: { push: jest.fn() },
            location: { pathname: '/chat' },
            setValue: jest.fn(),
            themeMode: 'light',
        };
        const component = mountSmart(<HeaderControlPanel {...props} />);
        component.find('Button').at(4).getElement().props.onClick();
        expect(props.history.push).toHaveBeenCalledWith('/account');
    });
});
