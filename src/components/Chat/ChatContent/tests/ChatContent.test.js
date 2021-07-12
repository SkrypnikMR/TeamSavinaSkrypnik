import React from 'react';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import configureStore from 'redux-mock-store';
import ChatContent from '../ChatContent';

const mockStore = configureStore();
const store = mockStore({
  chat: {
    onlineUsers: [],
    messages: [],
    newMessage: '',
    currentRoom: { room_id: 1, room_name: 'global' },
  },
  user: {
    theme: null,
    themeMode: 'light',
    token: null,
    userInfo: {
      email: 'skripnikMRW@gmail.com',
    },
  },
});

describe('ChatContent', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<ChatContent />, store);
    expect(component.html).toMatchSnapshot();
  });
  it('Should render StChatContant', () => {
    const component = mountSmart(<ChatContent />, store);
    expect(component.find('styled__StChatContant')).toHaveLength(1);
  });
  it('Should render ChatTitle', () => {
    const component = mountSmart(<ChatContent />, store);
    expect(component.find('ChatTitle')).toHaveLength(1);
  });
  it('Should render ChatDisplay', () => {
    const component = mountSmart(<ChatContent />, store);
    expect(component.find('ChatDisplay')).toHaveLength(1);
  });
  it('Should render ChatControlPanel', () => {
    const component = mountSmart(<ChatContent />, store);
    expect(component.find('ChatControlPanel')).toHaveLength(1);
  });
});
