import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StChatTitle } from './styled';

const ChatTitle = ({ currentRoomName, changeModalVisibility, getAllUsers }) => {
    const { t } = useTranslation();
    const handleOpenModalInviteUsers = () => {
        getAllUsers();
        changeModalVisibility({
            isOpen: true, data: {}, modalType: 'usersInChat',
        });
    };
    return (
        <StChatTitle>
            <span>
                {currentRoomName}
            </span>
            {currentRoomName && currentRoomName !== 'global'
                ? <p onClick={handleOpenModalInviteUsers}>{t('user_list')}</p>
                : null}
        </StChatTitle>
    );
};

ChatTitle.propTypes = {
    currentRoomName: PropTypes.string,
    changeModalVisibility: PropTypes.func,
    getAllUsers: PropTypes.func,
};

export default ChatTitle;
