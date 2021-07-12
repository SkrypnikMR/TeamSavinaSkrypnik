import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StMessage, StText, StPhoto, StData, StTitle } from './styled';

const ChatMessages = ({ img, author, messageText, messageTime, alignSelf }) => {
  const [state, setState] = useState({
    error: false,
    src: img,
    defaultImg: './public/assets/images/user.png',
  });
  const onError = () => setState({ ...state, error: true, src: state.defaultImg });
  return (
    <StMessage alignSelf={alignSelf}>
      <StPhoto>
        <img src={img ? state.src : state.defaultImg} onError={onError} />
      </StPhoto>
      <StText>
        <StTitle>
          {author}
          <StData>{messageTime}</StData>
        </StTitle>
        <div>
          {messageText}
        </div>
      </StText>
    </StMessage>
  );
};

ChatMessages.propTypes = {
  author: PropTypes.string,
  messageText: PropTypes.string,
  messageTime: PropTypes.string,
  img: PropTypes.any,
  alignSelf: PropTypes.string,
};

export default ChatMessages;
