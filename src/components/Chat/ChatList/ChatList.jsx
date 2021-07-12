import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Search from './Search';
import ChatListItems from './ChatListItems';
import { StChatList, StCreateRoom, StItems, StSearch } from './styled';
import Button from '../../UI/Button';
import SearchNoRes from './Search/SearchNoRes';

const ChatList = ({ rooms = [], changeModalVisibility }) => {
    const { t } = useTranslation();
    const handleCreateRoom = () => changeModalVisibility({
        isOpen: true, data: {}, modalType: 'createChat',
    });
    return (
        <StChatList>
            <StSearch>
                <Search />
            </StSearch>
            <StItems>
                {rooms?.length > 0 ? rooms.map(room => (
                    <ChatListItems
                        key={room.room_id}
                        content={room.room_name}
                        id={room.room_id}
                        unreadCount={room.unreadCount}
                    />
                )) : < SearchNoRes />}
            </StItems>
            <StCreateRoom>
                <Button
                    id='create_room'
                    name='create_room'
                    onClick={handleCreateRoom}
                    content={t('create_room')}
                    width="200px"
                    margin="15px 0"
                />
            </StCreateRoom>
        </StChatList>
    );
};
ChatList.propTypes = {
    rooms: PropTypes.array,
    changeModalVisibility: PropTypes.func.isRequired,
};

export default ChatList;
