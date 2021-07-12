import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NotificationManager } from 'react-notifications';
import { useTranslation } from 'react-i18next';
import { CreateRoomsWrapper } from './styled';
import Input from '/src/components/UI/Input';
import Button from '/src/components/UI/Button';

const CreateRoomsView = ({ createNewRoom, changeModalVisibility }) => {
    const { t } = useTranslation();
    const [state, setState] = useState({ newRoomName: '' });
    const handleCreateNewRoom = () => {
        if (!state.newRoomName) {
            return NotificationManager
                .error(t('without_text_new_room'), t('input_error'), 2000);
        }
        createNewRoom(state.newRoomName);
        changeModalVisibility({
            isOpen: false, data: {}, modalType: 'createChat',
        });
    };
    const handleOnChange = ({ value }) => {
        setState({ ...state, newRoomName: value });
    };
    return (
        <CreateRoomsWrapper>
            <Input
                id="create_room_input"
                name="create__room_input"
                onChange={handleOnChange}
                value={state.value}
                placeholder='create_new_room_input_placeholder'
                width="400px"
            />
            <Button
                id="new_room_creator"
                name="new_room_creator"
                onClick={handleCreateNewRoom}
                margin="20px"
                width="200px"
                content="create"
            />
        </CreateRoomsWrapper>
    );
};

CreateRoomsView.propTypes = {
    createNewRoom: PropTypes.func.isRequired,
    changeModalVisibility: PropTypes.func.isRequired,
};

export default CreateRoomsView;
