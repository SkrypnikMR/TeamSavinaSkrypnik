import { connect } from 'react-redux';
import InviteUsersView from './InviteUsersView.jsx';
import { getModalDataByType } from '/src/Store/modals/selectors';
import { reciveSuccessUsersRequest, setUserInRoom } from '/src/Store/chat/actions';
import { changeModalVisibility } from '/src/Store/modals/actions';
import { users } from '/src/Store/chat/selectors';

const mapStateToProps = (state, ownProps) => ({
    modalData: getModalDataByType(state, ownProps),
    users: users(state),
});

const mapDispatchToProps = dispatch => ({
    reciveSuccessUsersRequest: payload => dispatch(reciveSuccessUsersRequest(payload)),
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
    setUserInRoom: payload => dispatch(setUserInRoom(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteUsersView);
