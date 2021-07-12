import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import ChatList from '../ChatList';

const mockStore = configureStore();
const store = mockStore({
  chat: {
    onlineUsers: [],
    messages: {},
    newMessage: '',
    rooms: [{ room_id: 1, room_name: 'global' }],
    currentRoom: { room_id: null, room_name: '' },
    error: false,
    isLoading: false,
    filterByRoomName: '',
  },
  user: {
    userInfo: {
      email: 'SkripnikMRW@gmail.com',
      firstName: 'Max',
      lastName: 'Skripnik',
    },
  },
});

describe('ChatList', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<ChatList />, store);
    expect(component.html).toMatchSnapshot();
  });
  it('Should render StChatList', () => {
    const component = mountSmart(<ChatList />, store);
    expect(component.find('styled__StChatList')).toHaveLength(1);
  });
  it('Should render Search', () => {
    const component = mountSmart(<ChatList />, store);
    expect(component.find('Search')).toHaveLength(1);
  });
  it('Should no render ChatListItems', () => {
    const component = mountSmart(<ChatList />, store);
    expect(component.find('ChatListItems')).toHaveLength(0);
  });
  it('Should render ChatListItems filterByRoomName === "" ', () => {
    const rooms = [{ room_id: 1, room_name: 'global' }];
    const filterByRoomName = '';
    const component = mountSmart(<ChatList rooms={rooms} filterByRoomName={filterByRoomName} />, store);
    expect(component.find('ChatListItems')).toHaveLength(1);
  });
  it('Should render ChatListItems rooms includes filterValue ', () => {
    const rooms = [{ room_id: 1, room_name: 'global' }];
    const filterByRoomName = 'global';
    const component = mountSmart(<ChatList rooms={rooms} filterByRoomName={filterByRoomName} />, store);
    expect(component.find('ChatListItems')).toHaveLength(1);
  });
  it('Should render SearchNoRes', () => {
    const rooms = [{ room_id: 1, room_name: 'global' }];
    const filterByRoomName = 'globalF';
    const component = mountSmart(<ChatList rooms={rooms} filterByRoomName={filterByRoomName} />, store);
    expect(component.find('ChatListItems')).toHaveLength(0);
    expect(component.find('SearchNoRes')).toHaveLength(1);
  });
});
