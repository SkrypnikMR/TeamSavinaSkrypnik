import React from 'react';
import { shallow } from 'enzyme';

import ChatTitle from '../ChatTitle';

describe('ChatTitle', () => {
  let props;
  const currentRoomName = 'global';
  beforeEach(() => {
    props = {
      currentRoomName,
    };
  });
  it('Should match snapshot', () => {
    const component = shallow(<ChatTitle {...props} />);
    expect(component.html).toMatchSnapshot();
  });
  it('Should render StChatTitle', () => {
    const component = shallow(<ChatTitle />);
    expect(component.find('styled__StChatTitle')).toHaveLength(1);
  });
  it('Should render p', () => {
    const component = shallow(<ChatTitle />);
    expect(component.find('p')).toHaveLength(1);
  });
  it('Should render span', () => {
    const component = shallow(<ChatTitle />);
    expect(component.find('span')).toHaveLength(1);
  });
});
