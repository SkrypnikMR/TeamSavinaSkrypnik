import React from 'react';
import { shallow, mount } from 'enzyme';
import ChatDisplay from '../ChatDisplay';

describe('ChatDisplay', () => {
  const messages = {
    global: [
      {
        author: 'Me',
        messageText: 'someText',
        messageTime: '123123',
        room_id: 1,
        room_name: 'global',
      },
      {
        author: 'SkripnikMRW@gmail.com',
        messageText: 'someText',
        messageTime: '12312334',
        room_id: 1,
        room_name: 'global',
      },
    ],
  };
  const currentRoomName = 'global';
  it('Should match snapshot', () => {
    const component = shallow(<ChatDisplay
      messages={messages}
      currentUser="SkripnikMRW@gmail.com"
      currentRoomName={currentRoomName}
    />);
    expect(component.html).toMatchSnapshot();
  });
  it('Should render StChatDisplay', () => {
    const component = mount(<ChatDisplay
      messages={messages}
      currentUser="SkripnikMRW@gmail.com"
      currentRoomName={currentRoomName}
    />);
    expect(component.find('styled__StChatDisplay')).toHaveLength(1);
  });
  it('Should render ChatMessages', () => {
    const component = mount(<ChatDisplay
      messages={messages}
      currentUser="SkripnikMRW@gmail.com"
      currentRoomName={currentRoomName}
    />);
    expect(component.find('ChatMessages')).toHaveLength(messages[currentRoomName].length);
  });
});
