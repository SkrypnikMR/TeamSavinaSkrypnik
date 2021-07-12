import { connect } from 'react-redux';
import { userEmail } from '/src/Store/user/selectors';
import { currentRoomName } from '/src/Store/chat/selectors';
import ChatContent from './ChatContent.jsx';

const mapStateToProps = state => ({
    currentRoomName: currentRoomName(state),
    currentUser: userEmail(state),
});

export default connect(mapStateToProps)(ChatContent);
