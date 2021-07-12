import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import Chat from '../Chat';

const mockStore = configureStore();
const store = mockStore({
  chat: {
    onlineUsers: [],
    messages: {},
    newMessage: '',
    rooms: [],
    currentRoom: { room_id: null, room_name: '' },
    error: false,
    isLoading: false,
  },
  user: {
    userInfo: {
      email: 'SkripnikMRW@gmail.com',
      firstName: 'Max',
      lastName: 'Skripnik',
    },
  },
});

describe('Chat', () => {
  const init = jest.fn();
  it('Should match snapshot', () => {
    const component = shallowSmart(<Chat init={init} />, store);
    expect(component.html).toMatchSnapshot();
  });
  it('Should render StChat', () => {
    const component = mountSmart(<Chat init={init} />, store);
    expect(component.find('styled__StChat')).toHaveLength(1);
  });
  it('Should render ChatList', () => {
    const component = mountSmart(<Chat init={init} />, store);
    expect(component.find('ChatList')).toHaveLength(1);
  });
  it('Should render ChatContent', () => {
    const component = mountSmart(<Chat init={init} />, store);
    expect(component.find('ChatContent')).toHaveLength(1);
  });
});
