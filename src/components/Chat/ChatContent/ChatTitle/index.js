import { connect } from 'react-redux';
import ChatTitle from './ChatTitle.jsx';
import { currentRoomName } from '/src/Store/chat/selectors';
import { changeModalVisibility } from '/src/Store/modals/actions';
import { getAllUsers } from '/src/Store/chat/actions';

const mapStateToProps = state => ({
    currentRoomName: currentRoomName(state),
});

const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
    getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatTitle);
