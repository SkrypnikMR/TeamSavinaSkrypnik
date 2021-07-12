import { createSelector } from 'reselect';
import { userId } from '../user/selectors';

export const chatStore = state => state.chat;
export const newMessage = createSelector(
    chatStore,
    ({ newMessage }) => newMessage,
);
export const onlineUsersEmails = createSelector(
    chatStore,
    ({ onlineUsers }) => onlineUsers.map(el => el.email),
);
export const onlineUsersCount = createSelector(
    chatStore,
    ({ onlineUsers }) => onlineUsers.length,
);
export const messages = createSelector(
    chatStore,
    ({ messages }) => messages,
);
export const rooms = createSelector(
    chatStore,
    ({ rooms, filterByRoomName }) => {
        const result = rooms.filter(room => room.room_name.toLowerCase().includes(filterByRoomName.toLowerCase()));
        return result.length === 0 ? null : result;
    },
);
export const currentRoom = createSelector(
    chatStore,
    ({ currentRoom }) => currentRoom,
);
export const currentRoomName = createSelector(
    currentRoom,
    ({ room_name }) => room_name,
);
export const filterByRoomName = createSelector(
    chatStore,
    ({ filterByRoomName }) => filterByRoomName,
);
export const users = createSelector(
    chatStore,
    userId,
    ({ users, currentRoom }, id) => {
        return users.filter((user) => {
            let result = true;
            user.rooms.forEach((room) => {
                if (room.room_id === currentRoom.room_id || user.id === id) {
                    result = false;
                }
            });
            return result;
        });
    },
);
