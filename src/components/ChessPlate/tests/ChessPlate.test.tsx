import React from 'react';
import { shallow, mount} from 'enzyme';

import ChessPlate from '../ChessPlate';

describe('ChessPlate', () => {
    it('Should match snapshot', () => {
        const component = shallow(<ChessPlate />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StAddRoom', () => {
        const component = mount(<ChessPlate/>);
        expect(component.find('styled__StChessPlate')).toHaveLength(1);
    });
});
