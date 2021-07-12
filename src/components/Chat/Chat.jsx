import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatList from './ChatList';
import ChatContent from './ChatContent';
import { StChat } from './styled';

const Chat = ({ userInit, userToken, init }) => {
  useEffect(() => {
    if (!userInit && userToken) init();
  }, [userInit]);
  return (
    <StChat>
      <ChatList />
      <ChatContent />
    </StChat>
  );
};

Chat.propTypes = {
  userInit: PropTypes.bool,
  userToken: PropTypes.any,
  init: PropTypes.func,
};

export default Chat;
