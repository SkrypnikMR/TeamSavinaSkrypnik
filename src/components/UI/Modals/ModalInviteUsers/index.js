import { connect } from 'react-redux';
import ModalInviteUsers from './ModalInviteUsers.jsx';
import { reciveSuccessUsersRequest } from '/src/Store/chat/actions';

const mapDispatchToProps = dispatch => ({
    reciveSuccessUsersRequest: payload => dispatch(reciveSuccessUsersRequest(payload)),
});

export default connect(null, mapDispatchToProps)(ModalInviteUsers);
