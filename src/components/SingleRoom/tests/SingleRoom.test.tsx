import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleRoom from '../SingleRoom';

describe('SingleRoom', () => {
    let props;
    beforeEach(() => {
    props = {
        creatorLogin: 'KekShrek',
        gameType: 'Checkers',
        userLogin: 'KekShrek',
        id: '21ue321h3hjk21bh21-asdshjdsad',
        joinRoom: jest.fn(),
        playWithBot: jest.fn(),
        subscribeRoom: jest.fn(),
    };
        });
    it('Should match snapshot', () => {
        const component = shallow(<SingleRoom {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleRoom', () => {
        const component = mount(<SingleRoom {...props}/>);
        expect(component.find('styled__StSingleRoom')).toHaveLength(1);
    });
    it('should render Button', () => {
        const component = mount(<SingleRoom {...props}/>);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should render p with roomOwner t("your_room") ', () => {
        const component = mount(<SingleRoom {...props}/>);
        expect(component.find('p').first().text()).toBe('your_room');
    });
    it('should render p with roomOwner like creatorLogin ', () => {
        props.userLogin = 'abba';
        const component = mount(<SingleRoom {...props}/>);
        expect(component.find('p').first().text()).toBe(props.creatorLogin);
    });
    it('should click on button and call playWithBot func', () => {
        const component = mount(<SingleRoom {...props} />);
        const testEvent = { target: { id: '1' } };
        component.find('Button').props().onClick(testEvent);
        expect(props.playWithBot).toHaveBeenCalledWith(testEvent.target.id);
    });
    it('should click on button and call joinRoom func', () => {
        props.userLogin = 'abba';
        const component = mount(<SingleRoom {...props} />);
        const testEvent = { target: { id: '1' } };
        component.find('Button').props().onClick(testEvent);
        expect(props.joinRoom).toHaveBeenCalledWith(testEvent.target.id);
    });
});
