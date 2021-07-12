import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StChatListItems, StPhoto, StRoom } from './styled';
import { bgColorDefault } from '../../../UI/baseLayout';

const ChatListItems = ({
  id,
  img,
  color,
  content,
  setValue,
  unreadCount,
  resetUnreadCount,
  readAllMessagesInRoom,
  currentRoomName,
}) => {
  const handleClick = () => {
    setValue({ name: 'currentRoom', value: { room_id: id, room_name: content } });
    readAllMessagesInRoom({ room_id: id, room_name: content });
    resetUnreadCount(content);
  };
  useEffect(() => {
    if (currentRoomName === content) {
      return setState({ ...state, selected: true });
    }
    setState({ ...state, selected: false });
  }, [currentRoomName]);
  const [state, setState] = useState({
    error: false,
    src: img,
    defaultImg: './public/assets/images/defaultChats.png',
    selected: false,
  });
  const onError = () => setState({ ...state, error: true, src: state.defaultImg });
  return (
    <StChatListItems color={state.selected ? bgColorDefault : color} onClick={handleClick}>
      <StPhoto>
        <img src={img ? state.src : state.defaultImg} onError={onError} />
      </StPhoto>
      <StRoom>
        <p>{content}</p>
        {unreadCount ? <span>{unreadCount}</span> : null}
      </StRoom>
    </StChatListItems>
  );
};

ChatListItems.propTypes = {
  img: PropTypes.any,
  id: PropTypes.number,
  color: PropTypes.string,
  setValue: PropTypes.func,
  content: PropTypes.string,
  unreadCount: PropTypes.number,
  readAllMessagesInRoom: PropTypes.func.isRequired,
  resetUnreadCount: PropTypes.func.isRequired,
  currentRoomName: PropTypes.string,
};

export default ChatListItems;
