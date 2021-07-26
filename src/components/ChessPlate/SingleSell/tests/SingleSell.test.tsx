import React from 'react';
import { shallow, mount } from 'enzyme';
import { blackPic, white, WHITECHECKER, BLACKCHECKER } from '../../../UI/baseLayout';

import SingleSell from '../SingleSell';

describe('SingleSell', () => {
    let props;
    beforeEach(() => {
        props = {
            id: 1,
            status: { checker: null, blackSquare: false },
            getPosibleStep: jest.fn(),
            position: null,
            doCheckerStep: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<SingleSell {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render StSingleSell with blackPic', () => {
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('styled__StSingleSell')).toHaveLength(1);
        expect(component.find('styled__StSingleSell').props().color).toBe(white);
    });
    it('Should render StSingleSell with white', () => {
        props.status.blackSquare = true;
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('styled__StSingleSell')).toHaveLength(1);
        expect(component.find('styled__StSingleSell').props().color).toBe(blackPic);
    });
    it('Should render StPossition', () => {
        props.position = true;
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('styled__StPossition')).toHaveLength(1);
    });
    it('Should render img with src = WHITECHECKER', () => {
        props.status.checker = { blackChecker: true };
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('img').props().src).toBe(WHITECHECKER);
    });
    it('Should render img with src = BLACKCHECKER', () => {
        props.status.checker = { blackChecker: false };
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('img').props().src).toBe(BLACKCHECKER);
    });
    it('Should call getPosibleStep', () => {
        props.status.checker = { blackChecker: false };
        const component = mount(<SingleSell {...props}/>);
        (component.find('styled__StSingleSell').props().onClick({ target: { id: 1 } }));
        expect(props.getPosibleStep).toHaveBeenCalledWith(props.id);
    });
    it('Should call doCheckerStep', () => {
        props.position = true;
        const component = mount(<SingleSell {...props}/>);
        (component.find('styled__StSingleSell').props().onClick({ target: { id: 1 } }));
        expect(props.doCheckerStep).toHaveBeenCalledWith(props.id);
    });
});
