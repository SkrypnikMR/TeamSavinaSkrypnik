import * as React from 'react';
import ModalComponent from '../../Modal';
import CreateRoomsView from './CreateRoomsView';

const ModalCreateRoom = () => {
    const modalType = 'createChat';
    return (
        <ModalComponent
            headerTextKey='create_chat'
            modalType={modalType}
        >
            <CreateRoomsView modalType={modalType} />
        </ModalComponent>
    );
};

export default ModalCreateRoom;
