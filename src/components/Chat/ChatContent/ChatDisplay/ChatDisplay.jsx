import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StChatDisplay } from './styled';
import ChatMessages from './ChatMessages';
import { support } from '/src/helpers/support';

const ChatDisplay = ({ messages, currentUser, currentRoomName }) => {
  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  }, [currentRoomName, messages]);
  const messagesEndRef = useRef(null);
  return (
    <StChatDisplay>
      {messages[currentRoomName]?.length > 0 ? messages[currentRoomName].map((message) => {
        return (
          <ChatMessages
            author={message.author}
            key={message.time}
            messageText={message.text}
            messageTime={support.getFormatedDate(message.time)}
            alignSelf={currentUser === message.author
              ? 'flex-end'
              : 'flex-start'}
          />
        );
      }) : null}
      <div ref={messagesEndRef} />
    </StChatDisplay>
  );
};

ChatDisplay.propTypes = {
  messages: PropTypes.objectOf(PropTypes.array),
  currentUser: PropTypes.string,
  currentRoomName: PropTypes.string,
};

export default ChatDisplay;
