import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleSellTicTac from '../SingleSellTicTac';
import { CROSS, ZEROTIC } from '../../../UI/baseLayout';

describe('SingleSellTicTac', () => {
    const props = {
            id: 1,
            doStep: jest.fn(),
            status: '',
          };
    it('Should match snapshot', () => {
        const component = shallow(<SingleSellTicTac {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render StSingleSellTicTac ', () => {
        const component = mount(<SingleSellTicTac {...props} />);
        expect(component.find('styled__StSingleSellTicTac')).toHaveLength(1);
    });
    it('Should render img CROSS ', () => {
        props.status = 'X';
        const component = mount(<SingleSellTicTac {...props} />);
        expect(component.find('img').props().src).toBe(CROSS);
    });
    it('Should render img ZEROTIC ', () => {
        props.status = 'O';
        const component = mount(<SingleSellTicTac {...props} />);
        expect(component.find('img').props().src).toBe(ZEROTIC);
    });
    it('Should click tic-tac-toe field and call doStep ', () => {
        props.status = '';
        const component = mount(<SingleSellTicTac {...props} />);
        component.find('styled__StSingleSellTicTac').props().onClick();
        expect(props.doStep).toHaveBeenCalledWith(props.id);
    });
});
