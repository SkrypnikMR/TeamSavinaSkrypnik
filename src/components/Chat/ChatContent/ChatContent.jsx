import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ChatTitle from './ChatTitle';
import ChatDisplay from './ChatDisplay';
import ChatControlPanel from './ChatControlPanel';
import { StChatContant, StNoRoom } from './styled';


const ChatContent = ({ currentRoomName, currentUser }) => {
    const { t } = useTranslation();
    return (
        <StChatContant>
            <ChatTitle />
            {currentRoomName
                ? <ChatDisplay />
                : (
                    <StNoRoom>
                        {t('welcome')}
                        {' '}
                        {currentUser}
                        {''}
                        <span>{t('find_interlocutors')}</span>
                    </StNoRoom>
                )
            }
            <ChatControlPanel />
        </StChatContant>
    );
};

ChatContent.propTypes = {
    currentRoomName: PropTypes.string,
    currentUser: PropTypes.string,
};

export default ChatContent;
