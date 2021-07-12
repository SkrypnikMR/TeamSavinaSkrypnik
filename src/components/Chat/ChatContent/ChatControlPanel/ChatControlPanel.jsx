import React from 'react';
import PropTypes from 'prop-types';
import { INPUT__MESSAGE } from '/src/constants/componentsСonsts.js';
import { StChatControlPanel } from './styled';
import Input from '/src/components/UI/Input';
import Button from '/src/components/UI/Button';

const ChatControlPanel = (
  { onChangeInput, messageInputValue, sendNewMessage }) => {
  const handleOnclick = () => {
    sendNewMessage();
    onChangeInput({ name: 'newMessage', value: '' });
  };
  const onKeyUpEnter = () => {
    sendNewMessage();
    onChangeInput({ name: 'newMessage', value: '' });
  };
  return (
    <StChatControlPanel>
      <Input
        id={INPUT__MESSAGE.id}
        height="60px"
        key={INPUT__MESSAGE.id}
        name="newMessage"
        inputHeight="60px"
        borderRadius="0px"
        value={messageInputValue}
        onChange={onChangeInput}
        placeholder='placeholder_control_input'
        margin="0 auto"
        bgColor="transparent"
        color="white"
        onKeyUpEnter={onKeyUpEnter}
        fontSizeInp="20px"
        borderColor="transparent"
        bgFocusColor="transparent"
        padding="20px"
      />
      <Button
        height="50px"
        width="50px"
        content="✈"
        fontSize="40px"
        borderRadius="0px"
        margin="0px"
        padding="0 60px 0 0"
        id="sendMessage"
        onClick={handleOnclick}
        bgColor="transparent"
      />
    </StChatControlPanel>
  );
};

ChatControlPanel.propTypes = {
  onChangeInput: PropTypes.func,
  sendNewMessage: PropTypes.func,
  messageInputValue: PropTypes.string,
};

export default ChatControlPanel;
