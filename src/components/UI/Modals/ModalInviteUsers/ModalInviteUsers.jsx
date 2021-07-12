import * as React from 'react';
import ModalComponent from '../../Modal';
import InviteUsersView from './InviteUsersView';

const ModalInviteUsers = () => {
    const modalType = 'usersInChat';
    return (
        <ModalComponent
            headerTextKey='invite_users'
            modalType={modalType}
        >
            <InviteUsersView modalType={modalType} />
        </ModalComponent>
    );
};

export default ModalInviteUsers;
